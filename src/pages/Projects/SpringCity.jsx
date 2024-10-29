import React from "react";
import { Helmet } from "react-helmet";
import {
  springHighlightPoints,
  springProjectHightlights,
  springRightImage,
} from "../../utilities/Constants";
import Banner from "../../assets/projects/Spring/maheshwaram open plots for sale.webp";
import { ProjectHighlight, RightImageLeftText } from "../../components/Projects/CustomCard";

const SpringCity = () => {
  return (
    <>
      <Helmet>
        <title>#1 Plots in Sultanpur Hyderabad || Spring city 4</title>
        <meta
          name="description"
          content="Build your dream home in Hyderabad with Plots in Sultanpur by Ridge Homes. Luxury living & easy connectivity to top amenities. Invest now for a better future."
        />
        <meta
          name="keywords"
          content="plots in sultanpur hyderabad, open plots in sultanpur hyderabad, plots for sale in sultanpur hyderabad , plots for sale in bachupally, residential plots for sale in bachupally hyderabad, plot for sale in bachupally hyderabad, plots in bachupally, gated community plots for sale in bachupally, commercial plots for sale in bachupally, hmda approved plots in bachupally, hmda plots in bachupally ,open plots for sale in bachupally"
        />
      </Helmet>
      <div className="w-full pt-[115px] relative">
        <img
          src={Banner}
          alt="plots in shankarpally"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      <main className="container mx-auto px-4">
        {/* Right Image Left Text Section */}
        <RightImageLeftText data={springRightImage} />

        {/* Image Gallery Section */}
        {/* <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PhotoProvider>
              {[T1, T2, T3, T4, T5, T6].map((image, index) => (
                <PhotoView key={index} src={image}>
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[235px] object-cover rounded-lg cursor-pointer"
                    loading="lazy"
                  />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </section> */}

        {/* Project Highlights */}
        <ProjectHighlight data={springProjectHightlights} />

        {/* Location Highlights */}
        <section className="flex flex-col md:flex-row justify-between items-start py-12">
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-6">Location Highlights</h3>
            <ul className="space-y-3">
              {springHighlightPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-[#DD9C37] mr-3"></i>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={Tranquil2}
              alt="Location Highlights"
              className="w-full h-auto"
              loading="lazy"
            />
          </div> */}
        </section>

        {/* Map Section */}
        <section className="w-full py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.0922620911792!2d78.4061244!3d17.1169983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb10e1babfbe1%3A0xf5ccd2c4c46ce7b3!2sTranquil%20Valley!5e0!3m2!1sen!2sin!4v1668533503942!5m2!1sen!2sin"
            className="w-full h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default SpringCity;
