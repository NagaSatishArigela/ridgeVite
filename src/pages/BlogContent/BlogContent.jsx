import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Contact from "./Contact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contact from "./Contact";

const BlogContent = ({ blogs, categories }) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (blogs) {
      const currentBlog = blogs.find((blog) => blog.slug === slug);
      setBlog(currentBlog);

      if (currentBlog) {
        const currentBlogCategoryIds = currentBlog.categories.map(
          (ccat) => ccat.id
        );
        const related = blogs.filter(
          (b) =>
            b.categories.some((cat) =>
              currentBlogCategoryIds.includes(cat.id)
            ) && b.slug !== slug
        );
        setRelatedPosts(related);
      }
    }
    window.scrollTo(0, 0);
  }, [slug, blogs]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="w-full pb-10 bg-gray-100 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* First Column */}
            <div className="col-span-2">
              <img
                className="w-full h-auto object-cover"
                src={`${blog?.bannerImage?.url}`}
                alt="Blog Cover"
              />
              <h1 className="font-bold text-2xl my-5 px-4">{blog?.title}</h1>
              <div
                className="pt-2 leading-8 px-4"
                dangerouslySetInnerHTML={{ __html: blog?.content?.html }}
              ></div>
            </div>

            {/* Second Column */}
            <div>
              <div className="bg-white rounded-lg shadow p-5">
                <Contact />
              </div>
              <h1 className="font-bold text-xl mt-10 px-4">Categories</h1>
              <ul className="list-none mt-5 px-4">
                {categories?.map((category, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={`/blog/category/${category?.name}`}
                      className="block border border-gray-300 p-2 rounded-lg text-center hover:bg-gray-100"
                    >
                      {category?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-10">
            {relatedPosts.length > 0 && (
              <h2 className="text-xl font-bold mb-5">Related Posts</h2>
            )}
            {relatedPosts.length > 0 &&
              (relatedPosts.length > 3 ? (
                <Carousel responsive={responsive}>
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="text-black no-underline"
                    >
                      <div className="flex flex-col items-center p-5 border border-gray-300 bg-white rounded-lg">
                        {post.bannerImage && (
                          <img
                            src={post.bannerImage.url}
                            alt={post.title}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        )}
                        <h3 className="mt-3 text-center">{post.title}</h3>
                      </div>
                    </Link>
                  ))}
                </Carousel>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="text-black no-underline"
                    >
                      <div className="flex flex-col items-center p-5 border border-gray-300 bg-white rounded-lg">
                        {post.bannerImage && (
                          <img
                            src={post.bannerImage.url}
                            alt={post.title}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        )}
                        <h3 className="mt-3 text-center">{post.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
