import React, { useState } from "react";

import Button from "./Button";

const Menu = () => {
  const [selection, setSelection] = useState("Regular Sort");

  const selectionHandler = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className="flex flex-wrap lg:mx-8">
      <Button
        changed={selectionHandler}
        id="01"
        isSelected={selection === "Regular Sort"}
        label="Regular"
        value="Regular Sort"
      />
      <Button
        changed={selectionHandler}
        id="02"
        isSelected={selection === "Bubble Sort"}
        label="Bubble"
        value="Bubble Sort"
      />
      <Button
        changed={selectionHandler}
        id="03"
        isSelected={selection === "Merge Sort"}
        label="Merge"
        value="Merge Sort"
      />
      <Button
        changed={selectionHandler}
        id="04"
        isSelected={selection === "Insertion Sort"}
        label="Insertion"
        value="Insertion Sort"
      />
      <Button
        changed={selectionHandler}
        id="05"
        isSelected={selection === "Quartile Sort"}
        label="Quartile"
        value="Quartile Sort"
      />
      <button
        onClick={selectionHandler}
        value="Regular Sort"
        className="bg-white hover:bg-teal-100 text-gray-800 font-semibold m-4 py-2 px-4 border border-gray-400 rounded shadow"
      >
        Reset
      </button>
    </div>
  );
};

export default Menu;
