import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../atoms/";
import InputType from "../../types/inputType";
import "./form.scss";

interface Props {
  buttonName: string;
  handleSubmit: () => void;
  input: Array<InputType>;
  title: string;
  link?: { to: string; title: string };
}

const Form: React.FC<Props> = ({
  title,
  buttonName,
  handleSubmit,
  input,
  link,
}) => {
  return (
    <div className="form-container">
      <>
        <h1 className="form-container-title">{title}</h1>
        {input.map((elm, index) => {
          return (
            <Input
              type={elm.type}
              handleChange={elm.handleChange}
              value={elm.value}
              name={elm.name}
              placeholder={elm.placeholder}
              label={elm.label}
              errorMsg={elm.errorMsg}
              key={`${elm.name}-${index}`}
            />
          );
        })}
        <Button onClick={handleSubmit}>{buttonName}</Button>
        {link ? <Link to={link?.to}>{link?.title}</Link> : null}
      </>
    </div>
  );
};

export default Form;
