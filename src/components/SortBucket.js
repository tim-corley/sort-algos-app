import React from "react";

const SortBucket = () => {
  return (
    <div className="lg:flex flex-row items-center">
      <p className="text-gray-800 lg:text-xl lg:mx-4 align-center">
        Place header(s) here to sort:
      </p>
      <div className="border-dashed border-2 border-gray-400 h-32 w-4/5 lg:w-3/4"></div>
    </div>
  );
};

export default SortBucket;
