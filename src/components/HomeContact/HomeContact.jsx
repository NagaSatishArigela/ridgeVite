import React from 'react';
import HomeContactForm from '../ContactForm/ContactForm';

function HomeContact(props) {
  const { banner, contactDetails, noContact, page, srd } = props;

  return (
    <>
      <section
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0 z-0"></div> {/* Background Overlay */}
        <div className="relative container mx-auto flex flex-col justify-around lg:flex-row items-start gap-10 z-10">
          
          {/* Left Section - Contact Details */}
          <div className="bg-gray-900 bg-opacity-80 text-white p-8 rounded-md shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            {!noContact && (
              <div className="flex items-baseline mb-4">
                <i className="fa fa-map-marker text-xl"></i>
                <div className="ml-4">
                  <h5 className="text-lg font-semibold">Address</h5>
                  <p>
                    Trendz Trident, 2nd floor<br />
                    No.1-98/5/5/6, Plot No: 87, Survey No: 67<br />
                    Jubilee Enclave, Madhapur, Serilingampally<br />
                    Mandal, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-baseline mb-4">
              <i className="fa fa-phone text-xl"></i>
              <div className="ml-4">
                <h5 className="text-lg font-semibold">Phone</h5>
                <p>
                  <a href={`tel:${contactDetails ? contactDetails.phone : '9000888152'}`}>
                    +91 {contactDetails ? contactDetails.phone : '9000888152'}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-baseline">
              <i className="fa fa-envelope text-xl"></i>
              <div className="ml-4">
                <h5 className="text-lg font-semibold">Email</h5>
                <p>
                  <a href={`mailto:${contactDetails ? contactDetails.email : 'info@ridgehomes.in'}`}>
                    {contactDetails ? contactDetails.email : 'info@ridgehomes.in'}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-1/3">
            <HomeContactForm page={page} srd={srd} />
          </div>

        </div>
      </section>
    </>
  );
}

export default HomeContact;
