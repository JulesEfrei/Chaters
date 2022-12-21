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
    <main className="login-template-container">
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
            buttonName="Sign In"
            handleSubmit={() => handleSubmit({ email, password })}
            title="Sign In"
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
                label: "Email",
                errorMsg: "Email Invalid",
              },
              {
                type: "password",
                handleChange: (value) => setPassword(value),
                value: password,
                name: "password",
                label: "Password",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default LoginTemplate;
