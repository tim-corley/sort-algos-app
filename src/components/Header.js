import React from "react";

const Header = ({ label }) => {
  return (
    <th className="bg-gray-800 border border-gray-700 text-white text-xs m-4 p-2">
      {label.toUpperCase()}
    </th>
  );
};

export default Header;
