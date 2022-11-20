import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Input, Button } from "../atoms/";
import { Form } from "../molecules";
import "./registerTemplate.scss";

const RegisterTemplate: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");

  return (
    <div className="register-template-container">
      <img src={require("../../assets/img/logo.png")} />
      <Form
        buttonName="Create Account"
        handleSubmit={() => console.log("Click")}
        title="Register"
        link={{
          to: "/login",
          title: "Already an account?",
        }}
        input={[
          {
            type: "email",
            handleChange: (value) => setEmail(value),
            value: email,
            name: "Email",
            placeholder: "Email",
          },
          {
            type: "text",
            handleChange: (value) => setName(value),
            value: name,
            name: "Name",
            placeholder: "Name",
          },
          {
            type: "password",
            handleChange: (value) => setPassword(value),
            value: password,
            name: "password",
            placeholder: "Password",
          },
          {
            type: "password",
            handleChange: (value) => setPasswordVerif(value),
            value: passwordVerif,
            name: "password",
            placeholder: "Confirm Password",
            errorMsg: "Not the same password !",
          },
        ]}
      />
    </div>
  );
};

export default RegisterTemplate;
