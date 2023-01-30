import React from "react";
import "../styles/field.css";

const TextField = (props) => {
  const { title, name, value, onChange } = props;
  return (
    <div className="field">
      <label htmlFor={name}>{title}</label>
      <input name={name} value={value} onChange={onChange} {...props} />
    </div>
  );
};

export default TextField;
