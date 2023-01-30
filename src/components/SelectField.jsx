import React from "react";
import "../styles/field.css";

const SelectField = ({ title, name, value, onChange, options }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{title}</label>
      <select value={value} onChange={onChange} name={name}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
