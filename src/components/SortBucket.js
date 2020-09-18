import React from "react";

const SortBucket = () => {
  const drop = (e) => {
    e.preventDefault();
    const header_id = e.dataTransfer.getData("header_id");

    const header = document.getElementById(header_id);
    header.style.display = "block";

    e.target.apppendChild(header);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
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
