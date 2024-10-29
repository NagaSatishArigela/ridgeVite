import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const location = useLocation();
  const [send, setSend] = useState(false);

  const getPageName = (path) => {
    const pathSegments = path.split("/").filter(Boolean);
    return pathSegments.length > 0 && pathSegments[0] === "blog"
      ? pathSegments[0]
      : pathSegments[pathSegments.length - 1];
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let templateId = "template_rolhn2e";
    emailjs
      .sendForm(
        "service_pn8vf29",
        templateId,
        form.current,
        "RIdumvJqbANv7cRbb",
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setSend(true);
            setTimeout(() => {
              setSend(false);
            }, 2000);
            form.current.reset();
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 justify-center mx-auto">
      <h3 className="text-xl font-bold text-center mb-4">
        Make An Enquiry
      </h3>
      {send && (
        <div className="toast bg-green-100 p-2 text-green-700 rounded-lg flex items-center justify-center">
          <i className="fa fa-check-circle"></i> Information Sent
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          className="border border-black rounded-md p-3 text-black bg-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email ID"
          required
          className="border border-black rounded-md p-3 text-black bg-white"
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Contact Number"
          required
          className="border border-black rounded-md p-3 text-black bg-white"
        />
        <input
          type="hidden"
          name="pageName"
          value={getPageName(location.pathname) ? getPageName(location.pathname) : "Home"}
        />
        <input
          className="bg-yellow-600 text-white font-bold rounded-md p-4 cursor-pointer hover:bg-yellow-700 transition-all"
          type="submit"
          value="Enquire"
        />
      </form>
    </div>
  );
};

export default Contact;
