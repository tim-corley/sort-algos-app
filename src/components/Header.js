import React from "react";
import uuid from "react-uuid";

const Header = ({ label }) => {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("header_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  return (
    <th
      id={uuid()}
      draggable={true}
      onDragStart={dragStart}
      className="bg-gray-800 border border-gray-700 text-white text-xs m-4 p-2"
    >
      {label.toUpperCase()}
    </th>
  );
};

export default Header;
