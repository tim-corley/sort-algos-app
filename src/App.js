import React, { useState, useEffect } from "react";
import Header from "./components/Header";
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
      <Header />
      <SortBucket />
      <Table data={data} />
    </div>
  );
};

export default App;
