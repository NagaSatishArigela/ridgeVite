import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import homes from "../../assets/images/blogBanner.jpg";
// import defaultPic from "../../assets/images/heroImage.jpg";

const CategoryBlogs = ({ posts, categories }) => {
  const { name } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (posts && categories) {
      const category = categories.find(cat => cat.name === name);
      if (category) {
        const filtered = posts.filter((post) => 
          post.categories.some(cat => cat.id === category.id)
        );
        setFilteredBlogs(filtered);
      } else {
        setFilteredBlogs([]);
      }
    }
  }, [name, posts, categories]);

  return (
    <>
      <header className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          {/* <img src={homes} alt="blogs" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
        </div>
      </header>
      <div className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="block"
            >
              <div className="border-[10px] border-[#879D34] bg-white shadow-md overflow-hidden h-full flex flex-col">
                <img
                  className="w-full h-44 object-contain"
                  src={blog.bannerImage?.url}
                  alt="Blog Cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{blog.description}</p>
                  <div className="mt-auto">
                    <p className="text-[#FCB13E] font-bold">READ MORE...</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryBlogs;