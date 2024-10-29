import React, { useState } from "react";

const TeamMemberCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <img
        src={member.image}
        alt={member.name}
        className="rounded-full w-32 h-32 object-cover mb-4"
        loading="lazy"
      />
      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
      <h4 className="text-lg font-semibold mb-4 text-yellow-600">{member.title}</h4>

      <div className={`text-justify ${expanded ? "" : "overflow-hidden"} transition-all`}>
        <p className={`${expanded ? "" : "max-h-[72px]"} transition-all`}>
          {member.description}
        </p>
      </div>

      <button
        onClick={toggleDescription}
        className="mt-4 text-yellow-500 font-semibold focus:outline-none"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

      <div className="flex space-x-4 mt-6">
        <a href={member.facebook} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook text-2xl text-black"></i>
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin text-2xl text-black"></i>
        </a>
        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter text-2xl text-black"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
