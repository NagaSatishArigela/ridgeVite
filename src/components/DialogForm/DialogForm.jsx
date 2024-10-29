import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const DialogForm = ({ pdfUrl, setIsPDF, page = "Home", srd }) => {
  const form = useRef();
  const [send, setSend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getLead = () => {
    const leadMap = {
      Tranquil: "Ridge Homes Tranquil Valley",
      Kshetra: "Ridge Homes Kshetra",
      Sunrise: "Ridge Homes Sunrise City",
      default: "Lead from Website"
    };
    return leadMap[page] || leadMap.default;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const note = `${page} Brochure`;
      const lead = getLead();

      // API Configuration
      const api_key = "qHzq2IAp6Fyr2ztLLqyuv3ty3t";
      const api_key2 = "9a18874a712cc3d4e63c6f34df1587d1";
      const app_name = "wLNpB";

      // API URLs
      const url = `https://paramantra.us/paramantra/API/genLead_v2.php?API_Key=${api_key}&action=${app_name}&customername=${name}&customerPhone=${phone}&customeremail=${email}&leadNotes=${note}&leadProject=${encodeURIComponent(lead)}&channel=${page}`;
      const url2 = `https://app.sell.do/api/leads/create?sell_do[form][lead][name]=${name}&sell_do[form][lead][email]=${email}&sell_do[form][lead][phone]=${phone}&api_key=${api_key2}&sell_do[form][note][content]=${note}&sell_do[campaign][srd]=${srd}`;

      const headers = {
        "Content-Type": "application/json",
        "X-API-KEY": api_key,
        Authorization: `Basic ${btoa(`${api_key}:${api_key}`)}`,
        "Access-Control-Allow-Origin": "*",
        Accept: "/"
      };

      // Send all requests in parallel
      await Promise.all([
        axios.post(url, {}, { headers }),
        axios.post(url2),
        emailjs.sendForm(
          'service_pn8vf29',
          'template_xev4rbc',
          form.current,
          'RIdumvJqbANv7cRbb'
        )
      ]);

      // Handle success
      setSend(true);
      setIsPDF(false);
      document.getElementById("pdfDownload").click();
      
      setTimeout(() => {
        setSend(false);
      }, 2000);
      
      form.current.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      // Still allow PDF download on error
      document.getElementById("pdfDownload").click();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsPDF(false)}
      />

      {/* Form Container */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-8 w-[400px] max-w-[90vw] z-50">
        {/* Close Button */}
        <button
          onClick={() => setIsPDF(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <i className="fa fa-close text-xl" />
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold mb-6 text-gray-800">
          Fill Below Details
        </h3>

        {/* Hidden PDF Download Link */}
        <a 
          href={pdfUrl} 
          download 
          id="pdfDownload" 
          className="hidden"
        />

        {/* Form */}
        <form 
          ref={form} 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent"
          />

          {/* Phone Input */}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD9C37] focus:border-transparent"
          />

          {/* Hidden Page Name Input */}
          <input
            type="hidden"
            name="pageName"
            value={page}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#DD9C37] text-white font-bold py-2 px-4 rounded-md transition-colors
              ${isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#c88b33]'
              }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              'Download'
            )}
          </button>
        </form>

        {/* Success Toast */}
        {send && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
            <div className="flex items-center gap-2">
              <i className="fa fa-check-circle" />
              <span>Download started!</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DialogForm;