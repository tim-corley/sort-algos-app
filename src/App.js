import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Table from "./components/Table";
import SortBucket from "./components/SortBucket";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../data/factbook.json")
      .then((response) => response.json())
      .then((countryData) => setData(countryData));
  }, []);

  return (
    <div className="m-2">
      {/* HEADER */}
      <div className="flex justify-between">
        <h1 className="text-3xl text-teal-700 m-2">Algorithm Sorter</h1>
        {/* MENU */}
        <Menu />
      </div>
      <div className="w-full border-t-2 border-gray-300 mb-6"></div>
      {/* SORT BUCKET */}
      <SortBucket />
      <div className="w-full border-t-2 border-gray-300 my-6"></div>
      {/* TABLE CONTAINER */}
      <div className="max-h-screen p-2 m-2 border-2 rounded border-gray-800 overflow-scroll shadow-lg lg:w-9/12 lg:m-auto lg:mb-6">
        <Table data={data} />
      </div>
    </div>
  );
};

export default App;
