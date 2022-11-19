import React from "react";

import "./input.scss";

interface Props {
  type: "text" | "email" | "password";
  handleChange: (value: string) => void;
  value: string;
  name: string;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  type,
  handleChange,
  value,
  name,
  placeholder = "",
  label = "",
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
        />
        <p className="atom-input-error-msg">{name} is invalid.</p>
      </div>
    </>
  );
};

export default Input;
