import React, { useState, useEffect } from "react";
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
        return (
          <th className="text-xs" key={key}>
            {key.toUpperCase()}
          </th>
        );
      });
    }
  };

  const RenderRow = (props) => {
    return props.keys.map((key) => {
      return <td key={uuid()}>{props.tableData[key]}</td>;
    });
  };

  const getRowsData = () => {
    let rows = data;
    let keys = getKeys();
    return rows.map((row) => {
      return (
        <tr key={uuid()}>
          <RenderRow tableData={row} keys={keys} />
        </tr>
      );
    });
  };

  return (
    <table className="table-auto">
      <thead>
        <tr>{getHeader()}</tr>
      </thead>
      <tbody>{getRowsData()}</tbody>
    </table>
  );
};

export default Table;
