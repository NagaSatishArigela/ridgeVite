import React, { useEffect } from "react";

const PageNotFound = ({ setPageState }) => {
  useEffect(() => {
    setPageState(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-43px)] text-center font-sans">
      <div className="relative w-36 h-36 mb-10">
        <div className="text-9xl font-bold text-yellow-500 absolute inset-0 flex items-center justify-center">
          4
        </div>
        <div className="relative w-24 h-24 mx-auto -translate-y-5">
          <div className="absolute w-24 h-24 bg-yellow-500 rounded-full animate-ghost-face"></div>
          <div className="absolute top-5 left-7 w-5 h-5 bg-white rounded-full animate-eyes-move"></div>
          <div className="absolute top-5 right-7 w-5 h-5 bg-white rounded-full animate-eyes-move"></div>
        </div>
        <div className="text-9xl font-bold text-yellow-500 absolute inset-0 flex items-center justify-center">
          4
        </div>
      </div>

      <h1 className="text-2xl font-semibold">Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
