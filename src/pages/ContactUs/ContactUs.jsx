import React from "react";
import { Helmet } from "react-helmet"; // Updated to use react-helmet-async
import ContactBanner from "../../assets/images/maheshwaram-plots-price .webp";
import HomeContact from "../../components/HomeContact/HomeContact";

function ContactUs() {
  return (
    <>
      {/* Helmet for SEO and Meta Information */}
      <Helmet>
        <title>#1 Top Real Estate Companies in Hyderabad | Contact Us | Ridge Homes</title>
        <meta 
          name="description" 
          content="Ridge Homes: where passionate people create homes for conscious living. We care for your well-being. Contact us for open plots, villa plots, and more." 
        />
      </Helmet>

      {/* Main Contact Section */}
      <div className="contactus bg-gray-100 pt-20">
        <HomeContact page="Contact Us" srd="66470c55735daf1c2ba4514d" banner={ContactBanner} />
        
        {/* Uncomment WhatsAppLink if you need this feature */}
        {/* <WhatsAppLink /> */}
      </div>
    </>
  );
}

export default ContactUs;
