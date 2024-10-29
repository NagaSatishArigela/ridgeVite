import React from "react";
import isoImage from "../../assets/images/real estate agents in hyderabad.webp";

const ISOCertified = () => {
  return (
    <>
      <div className="flex justify-center pt-32">
        <img
          src={isoImage}
          alt="ISO Certified"
          className="w-full max-w-7xl h-auto object-cover"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ISOCertified;
