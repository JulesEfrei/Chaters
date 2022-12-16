import React, { useState } from "react";
import FormTypes from "../../types/formType";

import { Form } from "../molecules";
import "./loginTemplate.scss";

interface Props {
  handleSubmit: (data: FormTypes) => void;
}

const LoginTemplate: React.FC<Props> = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-template-container">
      <img src={require("../../assets/img/logo.png")} />
      <Form
        buttonName="Sign In"
        handleSubmit={() => handleSubmit({ email, password })}
        title="Login"
        link={{
          to: "/register",
          title: "No account?",
        }}
        input={[
          {
            type: "email",
            handleChange: (value) => setEmail(value),
            value: email,
            name: "Email",
            placeholder: "Email",
            errorMsg: "Email Invalid",
          },
          {
            type: "password",
            handleChange: (value) => setPassword(value),
            value: password,
            name: "password",
            placeholder: "Password",
          },
        ]}
      />
    </div>
  );
};

export default LoginTemplate;
