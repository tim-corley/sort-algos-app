import React from "react";

const Button = ({ id, changed, value, isSelected, label }) => {
  return (
    <div className="my-4 p-2">
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />

      <label className="m-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Button;
