import React, { useEffect, useState, lazy, Suspense, useMemo } from "react";
import careerBanner from "../../assets/images/open plots for sale in shankarpally.webp";
import { QUERY_SLUG_CAREERS, grahcms } from "../../utilities/Queries";

// Lazy load JobModal to improve initial load performance
const JobModal = lazy(() => import("../../components/JobModal/JobModal"));

const CareersPage = () => {
  const [careersData, setCareersData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoizing careers data to avoid re-calculation on each render
  const memoizedCareersData = useMemo(() => careersData, [careersData]);

  // Fetch careers data from the server (API)
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_CAREERS);
        setCareersData(data.careers);
      } catch (error) {
        console.error("Error fetching careers:", error);
      }
    };

    fetchCareers();
  }, []);

  // Debounced open modal function to avoid rapid state changes
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const openModal = debounce((job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  }, 300);

  const closeModal = debounce(() => {
    setSelectedJob(null);
    setIsModalOpen(false);
  }, 300);

  return (
    <>
      <div className="pt-[80px]">
        {/* Banner Section */}
        <header className="relative w-full h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Career Opportunities</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Ridgehome offers you a culture that is all about innovation and
                winning. It challenges you and brings out the absolute best in
                you.
              </p>
            </div>
          </div>
          <img
            src={careerBanner}
            alt="Career Opportunities"
            className="absolute inset-0 w-full h-full object-cover rounded-e-sm-[120px] -z-50"
            loading="lazy"
          />
        </header>

        {/* Current Openings Section */}
        <section className="py-16 text-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">CURRENT OPENINGS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {memoizedCareersData?.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg w-80 shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={job.image.url}
                  alt={job.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">Location: {job.location}</p>
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md font-bold hover:bg-yellow-600 transition-colors"
                    onClick={() => openModal(job)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lazy Loaded Job Modal */}
        <Suspense fallback={<div>Loading...</div>}>
          <JobModal job={selectedJob} isOpen={isModalOpen} onClose={closeModal} />
        </Suspense>
      </div>
    </>
  );
};

export default CareersPage;
