import React from "react";

const JobModal = ({ job, isOpen, onClose }) => {

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden pt-28">
      <div className="relative bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg">
        <span
          className="absolute top-4 right-4 text-3xl cursor-pointer text-gray-700 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">{job.jobTitle}</h2>
        <p className="mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: job?.jobDescription.html }}
        ></div>
      </div>
    </div>
  );
};

export default JobModal;
