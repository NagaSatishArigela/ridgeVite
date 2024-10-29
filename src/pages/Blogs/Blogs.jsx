import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import homes from "../../assets/images/maheshwaram open plots for sale.webp";
import defaultPic from "../../assets/images/maheshwaram-land-market-value .webp";

const Blogs = ({ Blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    window.scrollTo(0, 0);
  };

  const pages = useMemo(() => {
    return Array.from(
      { length: Math.ceil(Blogs.length / itemsPerPage) },
      (_, i) => i + 1
    );
  }, [Blogs.length, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Blogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="pt-[70px]">
        <header className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={homes}
              alt="blogs"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Ridge Homes Blogs
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore our captivating and enlightening articles, designed to
              empower you with valuable insights as a discerning real estate
              buyer.
            </p>
          </div>
        </header>
      </div>
      <div className="py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentItems.map((blog, index) => (
            <Link
              key={blog.blogID || index} // Only apply the key here
              to={`/blog/${blog.slug}`}
              className="block"
            >
              <div className="border-[10px] border-[#879D34] bg-white shadow-md overflow-hidden h-full flex flex-col">
                <img
                  className="w-full object-contain"
                  src={blog?.bannerImage.url || defaultPic}
                  alt="Blog Cover"
                  loading="lazy"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h6 className="font-bold text-lg mb-2">{blog.title}</h6>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {blog.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-[#FCB13E] font-bold">READ MORE...</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <ul className="flex justify-center mt-8 space-x-2">
          {pages.map((number, index) => (
            <li
              key={number || index} // Correctly using key here as well
              id={number}
              onClick={handleClick}
              className={`cursor-pointer px-4 py-2 border ${
                currentPage === number
                  ? "bg-[#FCB13E] text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blogs;
