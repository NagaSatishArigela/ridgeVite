import React from 'react';

function WhatsAppLink({ whatsappLink }) {
  return (
    <a 
      href={whatsappLink ? whatsappLink : "https://wa.link/jpe2jv"} 
      className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-[50%] text-4xl shadow-lg hover:bg-green-600 transition"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppLink;
