import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormApi from "../../api/form-api";
import axios from "axios";

function HomeContactForm(props) {
  const { page, srd } = props;
  const form = useRef();
  const [send, setSend] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    pageName: page,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let payload;
    let { name, email, phone: number, message: note } = formData;
    switch (page) {
      // Payload mapping based on page
      case "Home":
      case "Sunrise":
      case "Spring City":
        payload = {
          parameters: [{ name: "name", value: e.target[0].value }],
          broadcast_name: page,
          template_name: "home_page_enquiry",
        };
        break;
      case "Tranquil":
        payload = {
          parameters: [{ name: "name", value: e.target[0].value }],
          broadcast_name: "Tranquil",
          template_name: "tranquilvalley_form",
        };
        break;
      case "Kshetra":
        payload = {
          parameters: [{ name: "name", value: e.target[0].value }],
          broadcast_name: "Kshetra",
          template_name: "kshetra_form",
        };
        break;
    }

    FormApi.whatsAppForm(payload, number)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    let templateId = "template_rolhn2e";
    emailjs.sendForm(
      "service_pn8vf29",
      templateId,
      form.current,
      "RIdumvJqbANv7cRbb"
    )
    .then(
      (result) => {
        if (result) {
          setSend(true);
          setTimeout(() => setSend(false), 2000);
          form.current.reset();
          setFormData({ name: '', email: '', phone: '', message: '', pageName: page });
        }
      },
      (error) => console.error(error.text)
    );

    const lead = page === "Tranquil" ? "Ridge Homes Tranquil Valley" : page === "Kshetra" ? "Ridge Homes Kshetra" : "Lead from Website";
    const apiUrl = `https://paramantra.us/paramantra/API/genLead_v2.php?API_Key=qHzq2IAp6Fyr2ztLLqyuv3ty3t&action=wLNpB&customername=${name}&customerPhone=${number}&customeremail=${email}&leadNotes=${note}&leadProject=${encodeURIComponent(lead)}&channel=${page}`;

    axios.post(apiUrl, {}, { headers: { "Content-Type": "application/json" } })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-2xl font-bold mb-6">Book Your Site Visit Now</h3>
      {send && (
        <div className="bg-green-200 text-green-700 p-3 rounded-md mb-4">
          <i className="fa fa-check-circle"></i> Information Sent
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />
        <input type="hidden" name="pageName" value={formData.pageName} readOnly />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default HomeContactForm;
