import React from "react";
import Header from "./Header";
import uuid from "react-uuid";
import "../styles.css";

const Table = ({ data }) => {
  const getKeys = () => {
    if (data[0]) {
      return Object.keys(data[0]);
    }
  };

  const getHeader = () => {
    let keys = getKeys();
    if (keys) {
      return keys.map((key) => {
        return <Header key={uuid()} label={key} />;
      });
    }
  };

  const RenderRow = ({ keys, tableData }) => {
    return keys.map((key) => {
      return (
        <td key={uuid()} className="py-2">
          {tableData[key]}
        </td>
      );
    });
  };

  const getRowsData = () => {
    let rows = data;
    let keys = getKeys();
    return rows.map((row) => {
      return (
        <tr key={uuid()} className="border-dotted border-b-2 border-gray-200">
          <RenderRow tableData={row} keys={keys} />
        </tr>
      );
    });
  };

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>{getHeader()}</tr>
        </thead>
        <tbody>{getRowsData()}</tbody>
      </table>
    </>
  );
};

export default Table;
