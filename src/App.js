import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../data/factbook.json")
      .then((response) => response.json())
      .then((countryData) => setData(countryData));
  }, []);

  return (
    <>
      <h1 className="text-2xl text-teal-700 m-8">Algorithm Sorter</h1>
      <hr />
      <Table data={data} />
    </>
  );
};

export default App;
