import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <p className="text-7xl font-thin">L</p>
      <div className="w-10 h-10 rounded-full border-dashed border-8 border-blue-600 animate-spin"></div>
      <p className="text-7xl font-thin">adding...</p>
    </div>
  );
};

export default LoadingSpinner;
