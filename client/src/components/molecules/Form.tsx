import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../atoms/";
import InputType from "../../types/inputType";
import "./form.scss";

interface FormInput extends InputType {
  ref: React.RefObject<HTMLInputElement>;
}

interface Props {
  buttonName: string;
  handleSubmit: () => void;
  input: Array<FormInput>;
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
              value={elm.ref.current?.value}
              ref={elm.ref}
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
