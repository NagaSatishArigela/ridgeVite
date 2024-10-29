import React from 'react';

function Address({ contactDetails }) {
  return (
    <>
      <div className="contact-home-sec mb-4">
        <i className="fa fa-map-marker text-xl"></i>
        <div className="sec-bloc">
          <h5 className="text-xl font-semibold">Address</h5>
          <p>
            Trendz Trident, 2nd floor<br />
            No.1-98/5/5/6, Plot No: 87, Survey No: 67<br />
            Jubilee Enclave, Madhapur, Serilingampally<br />
            Mandal, Hyderabad, Telangana 500081
          </p>
        </div>
      </div>

      <div className="contact-home-sec mb-4">
        <i className="fa fa-phone text-xl"></i>
        <div className="sec-bloc">
          <h5 className="text-xl font-semibold">Phone</h5>
          <p>
            <a href={`tel:${contactDetails ? contactDetails.phone : '9000888152'}`}>
              +91 {contactDetails ? contactDetails.phone : '9000888152'}
            </a>
          </p>
        </div>
      </div>

      <div className="contact-home-sec">
        <i className="fa fa-envelope text-xl"></i>
        <div className="sec-bloc">
          <h5 className="text-xl font-semibold">Email</h5>
          <p>
            <a href={`mailto:${contactDetails ? contactDetails.email : 'info@ridgehomes.in'}`}>
              {contactDetails ? contactDetails.email : 'info@ridgehomes.in'}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Address;
