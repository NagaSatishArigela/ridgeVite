import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/images/plots for sale in shankarpally hyderabad.webp";
import BannerNext1 from "../../assets/images/maheshwaram hmda plots_1.webp";
import BannerNext2 from "../../assets/images/maheshwaram hmda plots_1.webp";
import BannerNext3 from "../../assets/images/maheshwaram hmda plots_1.webp";
import BannerNext4 from "../../assets/images/maheshwaram hmda plots_1.webp";
import blog1 from "../../assets/images/property for sale in hyderabad.webp";
import blog2 from "../../assets/images/maheshwaram hmda plots_1.webp";
import blog3 from "../../assets/images/maheshwaram hmda plots_1.webp";

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

const blogSec = [
  {
    image: blog1,
    title: "ISO Certified",
    description:
      "Ridge Homes is proudly ISO certified, proving our commitment to quality construction, efficient processes, and exceptional customer service.",
    link: "/iso-certified",
  },
  {
    image: blog2,
    title: "Tranquil Valley",
    description:
      "Welcome to Tranquil Valley, a nature-centric Premium Villa Plots in Maheshwaram. This project symbolizes our commitment to innovation, quality, and sustainable development.",
    link: "/projects/tranquilvalley",
  },
  {
    image: blog3,
    title: "Kshetra",
    description:
      "Welcome to Kshetra, a theme-based villa project in Shankarpally. This project restores ancient practices, blending nature, culture, and art.",
    link: "/projects/kshetra",
  },
];

const bannerContent = [
  {
    text1: '"Nature is pleased with simplicity. And nature is no dummy."',
    text2: " - Isaac Newton",
  },
  {
    text1: '"Adopt the pace of nature. Her secret is patience."',
    text2: " - Ralph Waldo Emerson",
  },
  {
    text1: '"Choose only one master - Nature"',
    text2: " - Rembrandt",
  },
  {
    text1: '"Leave the roads; take the trails."',
    text2: " - Pythagoras",
  },
  {
    text1:
      '"It is the unfailing fall of rain that sustains the world. Therefore, look upon rain as the nectar of life."',
    text2: " - Tirukural",
  },
];

function TilesSection({ data }) {
  return (
    <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10">
      {data.map((item) => (
        <div
          key={item.title}
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
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
              <span className="text-yellow-600 font-semibold mt-4 inline-block">
                Read More
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

function HomeSections() {
  const randomItem =
    bannerContent[Math.floor(Math.random() * bannerContent.length)];

  return (
    <>
      <div className="relative w-full pt-24 overflow-hidden">
        <img
          src={Banner}
          alt="banner image"
          className="object-cover w-full h-auto"
          loading="lazy"
        />
        <div className="absolute inset-y-0 left-5 md:left-10 lg:left-14 flex flex-col justify-end bottom-4 md:bottom-6 text-black max-w-[180px] md:max-w-80">
          <p className="text-[10px] sm:text-sm md:text-xl text-left">
            {randomItem.text1}
          </p>
          <span className="block mt-2 text-right text-[10px] sm:text-sm md:text-lg lg:text-xl">
            {randomItem.text2} <br /> An inspiration for Ridge
          </span>
        </div>
      </div>

      {/* Project Banner Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
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

      {/* Blog Section */}
      <section className="bg-gray-100 py-10">
        <h1 className="text-center text-3xl font-bold mb-10">Latest News</h1>
        <TilesSection data={blogSec} />
      </section>
    </>
  );
}

export default HomeSections;
