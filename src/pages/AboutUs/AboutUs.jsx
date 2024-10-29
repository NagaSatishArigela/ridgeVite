import React from "react";
import { Helmet } from "react-helmet";
import aboutUs from "../../assets/images/ridgeNewLogo.webp";
import surya from "../../assets/images/surya-ridge-homes.webp";
import raju from "../../assets/images/raju.webp";
import amar from "../../assets/images/Ramesh Amarnath V.webp";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";

const teamMembers = [
    {
        image: surya,
        name: "Surya Penmetsa",
        title: "MANAGING DIRECTOR",
        description:
          "As managing director of the Ridge Group, He is deeply passionate about creating and delivering value for the people around him. His intense focus on value enables him to cut the noise and drive team toward results. Meetings are always short with Surya. His cross boarder and cross cultural experience is apparent in every conversation. Contrarian in thinking and quick on decision making enables team to execute business rooted on rationalality than axiomatic. Pleasure and challenging to work with at the same time. His emphasys on systems enable us to come up with longterm solutions to the challenges during execution. Growth hacker at core, everyday is a fresh start.",
        facebook: "#",
        linkedin: "#",
        twitter: "#",
      },
      {
        image: raju,
        name: "Srinivas Raju Vetukuri",
        title: "MANAGING PARTNER",
        description:
          "Srinivas is the Managing Partner of Ridge with over 30 years of experience in the industry. With a proven track record of success and a deep understanding of the real estate market, Srinivas has established himself as a leading figure in the industry. He has dedicated his career to helping clients navigate the complex world of real estate, providing expert guidance and advice along the way. Srinivas is known for commitment to delivering results, earning him a reputation as one of the most reliable and trustworthy professionals in the business. Whether you are a first-time homebuyer or an experienced investor, Srinivas and his team have the expertise and experience to help you achieve your goals.",
        facebook: "#",
        linkedin: "#",
        twitter: "#",
      },
      {
        image: amar,
        name: "Ramesh Amarnath V",
        title: "VP OF OPERATIONS",
        description:
          "Mr. Ramesh Amarnath is a B.Tech graduate in Electrical and Electronics Engineering from JNTU Hyderabad, complemented by an MBA in HR. With over 25 years of extensive experience in various domains, including Construction Management, Infrastructure design, and implementation of large civil projects such as airports and 50+ storey structures, as well as social projects, audit, and compliance.He has held leadership roles in prominent MNCs such as A&P, HSBC EDPI, JLL, UBS India Service Centre, SKS Microfinance Ltd and others. He is a certified Professional Project Management (PPM) and Lean Management expert. He also holds qualifications in the Civil Infrastructure domain. Notably, he has served as the CEO at Community Pure Water (CPW), a non-profit ensuring rural clean water access, and at SKS Trusts, a Multi Crore+ entity dedicated to rural empowerment.",
        facebook: "#",
        linkedin: "#",
        twitter: "#",
      },
];

const AboutUs = () => {
    return (
        <>
          <Helmet>
            <title>#1 About Us Best Real Estate Company in Hyderabad | Ridge Homes</title>
            <meta
              name="description"
              content="A home for learning & growth that upholds traditions & age-old practices. Discover more about us today & build a foundation that will stand the test of time."
            />
          </Helmet>
    
          {/* About Us Section */}
          <div className="container mx-auto py-10 pt-36">
            <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-8">
              <div className="md:w-1/3 w-full flex justify-center">
                <img
                  src={aboutUs}
                  alt="Company Image"
                  className="w-auto h-48" // Maintains image size and aspect ratio
                  loading="lazy"
                />
              </div>
              <div className="md:w-2/3 w-full p-4">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <div className="flex items-start">
                  <span className="text-5xl font-bold text-yellow-500 pr-2">|</span>
                  <p className="text-lg font-semibold leading-relaxed">
                    Ridge is a culmination of people with an acquired passion for
                    conscious living. We believe learning and growth begins at home.
                  </p>
                </div>
                <p className="text-justify leading-relaxed mt-4">
                  A home that is designed to uphold traditions and age-old practices
                  is one that will stand the test of time. A recurring theme at Ridge
                  is the creation of ideal living environments that honor the
                  knowledge of our forefathers. Recently, the growth of consumerism
                  and city life has taken its toll on family upbringing. When we
                  started Ridge, we aimed to bring families together in more ways than
                  one. All our projects are focused on the rejuvenation of our
                  customers. With an appreciation for nature, art, and culture, Ridge
                  is on a path to revolutionizing living spaces...
                </p>
              </div>
            </div>
          </div>
    
          {/* Team Section */}
          <div className="bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </>
      );
};

export default AboutUs;
