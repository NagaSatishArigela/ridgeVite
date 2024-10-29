import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import FormApi from "../../api/form-api";

const UnlockModal = ({ isOpen, onClose, page = "Home", srd }) => {
  const [send, setSend] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getPayload = () => {
    const payloadMap = {
      Home: {
        broadcast_name: "Home",
        template_name: "home_page_enquiry",
      },
      sunrisecity: {
        broadcast_name: "Sunrise",
        template_name: "home_page_enquiry",
      },
      tranquilvalley: {
        broadcast_name: "Tranquil",
        template_name: "tranquilvalley_form",
      },
      kshetra: {
        broadcast_name: "Kshetra",
        template_name: "kshetra_form",
      },
      springcity: {
        broadcast_name: "Spring City",
        template_name: "home_page_enquiry",
      },
      "Contact Us": {
        broadcast_name: "Contact Us",
        template_name: "home_page_enquiry",
      },
    };

    const selectedPayload = payloadMap[page] || payloadMap.Home;

    return {
      parameters: [{ name: "name", value: formData.name }],
      ...selectedPayload,
    };
  };

  const getLead = () => {
    const leadMap = {
      tranquilvalley: "Ridge Homes Tranquil Valley",
      kshetra: "Ridge Homes Kshetra",
      sunrisecity: "Ridge Homes Sunrise City",
      default: "Lead from Website",
    };

    return leadMap[page] || leadMap.default;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // WhatsApp Form submission
      await FormApi.whatsAppForm(getPayload(), formData.phone);

      // EmailJS submission
      const emailResult = await emailjs.sendForm(
        "service_pn8vf29",
        "template_rolhn2e",
        form.current,
        "RIdumvJqbANv7cRbb"
      );

      if (emailResult.text) {
        setSend(true);
        setTimeout(() => setSend(false), 2000);
        form.current.reset();
      }

      // Paramantra API submission
      const lead = getLead();
      const api_key = "qHzq2IAp6Fyr2ztLLqyuv3ty3t";
      const api_key2 = "9a18874a712cc3d4e63c6f34df1587d1";
      const app_name = "wLNpB";

      const url = `https://paramantra.us/paramantra/API/genLead_v2.php?API_Key=${api_key}&action=${app_name}&customername=${
        formData.name
      }&customerPhone=${formData.phone}&customeremail=${
        formData.email
      }&leadNotes=${formData.message}&leadProject=${encodeURIComponent(
        lead
      )}&channel=${page}`;

      const url2 = `https://app.sell.do/api/leads/create?sell_do[form][lead][name]=${formData.name}&sell_do[form][lead][email]=${formData.email}&sell_do[form][lead][phone]=${formData.phone}&api_key=${api_key2}&sell_do[form][note][content]=${formData.message}&sell_do[campaign][srd]=${srd}`;

      const headers = {
        "Content-Type": "application/json",
        "X-API-KEY": api_key,
        Authorization: `Basic ${btoa(`${api_key}:${api_key}`)}`,
        "Access-Control-Allow-Origin": "*",
        Accept: "/",
      };

      await Promise.all([
        axios.post(url, {}, { headers }),
        axios.post(url2)
      ]);

      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-[350px] bg-gray-50 p-12 rounded-lg shadow-xl">
        {/* Success Toast */}
        {send && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <i className="fa fa-check-circle" />
            Information Sent
          </div>
        )}

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 transition-colors"
        >
          &times;
        </button>

        {/* Form */}
        <form 
          ref={form} 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent"
            />
            <input
              type="hidden"
              name="pageName"
              value={page}
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent resize-none h-24"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#DD9C37] text-white font-bold px-4 py-2 rounded-md hover:bg-[#c88b33] transition-colors mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnlockModal;