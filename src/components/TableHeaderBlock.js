import React from "react";

const TableHeaderBlock = ({ label }) => {
  const handleBlockClick = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <th
      onClick={handleBlockClick}
      className="bg-gray-800 border border-gray-700 text-white text-xs m-4 p-2"
    >
      {label.toUpperCase()}
    </th>
  );
};

export default TableHeaderBlock;
