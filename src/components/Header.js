import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <div className="lg:flex justify-between">
        <h1 className="text-3xl text-teal-700 m-2">Algorithm Sorter</h1>
        <Menu />
      </div>
      <div className="w-full border-t-2 border-gray-300 mb-6"></div>
    </>
  );
};

export default Header;
