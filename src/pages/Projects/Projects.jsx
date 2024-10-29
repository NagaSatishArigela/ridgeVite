import React from 'react';
import BannerNext1 from "../../assets/images/maheshwaram hmda plots_1.webp";
import BannerNext2 from "../../assets/images/maheshwaram hmda plots_1.webp";
import BannerNext3 from "../../assets/images/maheshwaram hmda plots_1.webp";
import BannerNext4 from "../../assets/images/maheshwaram hmda plots_1.webp";
import { Link } from 'react-router-dom';

const bannerNext = [
    {
      image: BannerNext2,
      link: "projects/kshetra",
      hmda: "DTCP LP No:- 135/2024/H",
    },
    {
      image: BannerNext3,
      link: "projects/tranquilvalley",
      hmda: "HMDA LP No:- 000038/LO/PLG/HMDA/2023",
      rera: "RERA:- P02400005589",
    },
    {
      image: BannerNext1,
      link: "projects/sunrisecity",
      hmda: "HMDA LP No:- 000186/LO/PLG/HMDA/2022",
      rera: "RERA:- P01100005222",
    },
    {
      image: BannerNext4,
      text: "The property market in Hyderabad has been growing by leaps and bounds, making it an ideal investment destination for home buyers and investors.",
      link: "projects/springcity",
    },
  ];

const Projects = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10 pt-40">
        {bannerNext.map((item) => (
          <div
            key={item.link}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Link to={item.link} className="block">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                {item.title && (
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                )}
                {item.text && <p className="text-gray-700 mb-2">{item.text}</p>}
                {item.hmda && (
                  <p className="text-gray-700 mb-2">
                    <b>{item.hmda}</b>
                  </p>
                )}
                {item.rera && (
                  <p className="text-gray-700">
                    <b>{item.rera}</b>
                  </p>
                )}
                <span className="text-yellow-600 font-semibold mt-4 inline-block">
                  Read More
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
  )
}

export default Projects