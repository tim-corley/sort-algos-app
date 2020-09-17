import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import SortWell from "./components/SortWell";
import Card from "./components/Card";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../data/factbook.json")
      .then((response) => response.json())
      .then((countryData) => setData(countryData));
  }, []);
  console.log(data);

  return (
    <>
      <div className="flexbox">
        <SortWell id="sortwell-01" className="sortwell">
          <Card id="card-01" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </SortWell>
        <SortWell id="sortwell-02" className="sortwell">
          <Card id="card-02" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </SortWell>
      </div>
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
    </>
  );
};

export default App;
