import React from 'react';

const YoutubeTestimonial = ({ videoId }) => {
  return (
    <div className="relative w-full">
      <iframe
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        title="YouTube Testimonial Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default YoutubeTestimonial;
