import React from "react";
import { useState } from "react";
import { Form } from "../molecules";
import "./registerTemplate.scss";
import FormTypes from "../../types/formType";

interface Props {
  handleSubmit: (data: FormTypes) => void;
}

const RegisterTemplate: React.FC<Props> = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");

  return (
    <main className="register-template-container">
      <div className="presentation">
        <div className="content">
          <h1>
            ▶ A new chat application will change your vision of{" "}
            <span>chating.</span>
          </h1>
          <h3>Alpha version. New features and re-building are comming soon.</h3>
        </div>
      </div>
      <div className="right-container">
        <div className="content">
          <img src={require("../../assets/img/logo.png")} alt="Logo" />
          <h1 className="title">Hey, hello 👋</h1>
          <Form
            buttonName="Create Account"
            handleSubmit={() =>
              handleSubmit({ name, email, password, passwordVerif })
            }
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
                label: "Email",
              },
              {
                type: "text",
                handleChange: (value) => setName(value),
                value: name,
                name: "Name",
                label: "Name",
              },
              {
                type: "password",
                handleChange: (value) => setPassword(value),
                value: password,
                name: "password",
                label: "Password",
              },
              {
                type: "password",
                handleChange: (value) => setPasswordVerif(value),
                value: passwordVerif,
                name: "password",
                label: "Confirm Password",
                errorMsg: "Not the same password !",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default RegisterTemplate;
