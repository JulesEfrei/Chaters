import React from "react";

import "./input.scss";
import InputType from "../../types/inputType";

const Input: React.FC<InputType> = ({
  type,
  handleChange,
  value,
  name,
  placeholder = "",
  label = "",
  errorMsg = "",
}) => {
  return (
    <>
      <div className="atom-input-container">
        {label !== "" ? (
          <label className="atom-input-label">{label}</label>
        ) : null}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="atom-input"
          minLength={type === "password" ? 8 : undefined}
        />
        <p className="atom-input-error-msg">
          {errorMsg === "" ? `${name} is invalid.` : errorMsg}
        </p>
      </div>
    </>
  );
};

export default Input;
