import React from "react";

import "./input.scss";
import InputType from "../../types/inputType";

const Input = React.forwardRef<HTMLInputElement, InputType>(
  (
    { type, value, name, placeholder = "", label = "", errorMsg = "" },
    ref: React.Ref<HTMLInputElement>
  ) => {
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
            ref={ref}
            className="atom-input"
            minLength={type === "password" ? 8 : undefined}
          />
          <p className="atom-input-error-msg">
            {errorMsg === "" ? `${name} is invalid.` : errorMsg}
          </p>
        </div>
      </>
    );
  }
);

export default Input;
