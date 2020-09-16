import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import uuid from "react-uuid";
import "./styles.css";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../data/factbook.json")
      .then((response) => response.json())
      .then((countryData) => setData(countryData));
  }, []);
  console.log(data);

  return (
    <div className="bg-gray-200 my-10 max-w-xl m-auto">
      {data.map((country) => (
        <li
          key={uuid()}
          className="list-none border-dotted border-b-2 border-gray-400 py-2"
        >
          <p className="align-middle m-2">{country["Country Name"]}</p>
        </li>
      ))}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
