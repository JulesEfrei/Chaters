import React, { useState } from "react";

import { Input, Button } from "../atoms/";
import { Form } from "../molecules";
import "./loginTemplate.scss";

const LoginTemplate: React.FC = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  return (
    <div className="login-template-container">
      <img src={require("../../assets/img/logo.png")} />
      <Form
        buttonName="Sign In"
        handleSubmit={() => console.log("Click")}
        title="Login"
        input={[
          {
            type: "email",
            handleChange: (value) => setEmail(value),
            value: email,
            name: "Email",
            placeholder: "Email",
            errorMsg: "Tests",
          },
          {
            type: "password",
            handleChange: (value) => setPassword(value),
            value: passowrd,
            name: "password",
            placeholder: "Password",
          },
        ]}
      />
    </div>
  );
};

export default LoginTemplate;
