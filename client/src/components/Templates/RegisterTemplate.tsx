import React, { useRef } from "react";
import { Form } from "../molecules";
import "./registerTemplate.scss";
import FormTypes from "../../types/formType";

interface Props {
  handleSubmit: (data: FormTypes) => void;
}

const RegisterTemplate: React.FC<Props> = ({ handleSubmit }) => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordVerif = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

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
              handleSubmit({
                name: name.current!.value,
                email: email.current!.value,
                password: password.current!.value,
                passwordVerif: passwordVerif.current!.value,
              })
            }
            title="Register"
            link={{
              to: "/login",
              title: "Already an account?",
            }}
            input={[
              {
                type: "email",
                value: email.current ? email.current.value : "",
                name: "Email",
                label: "Email",
                ref: email,
              },
              {
                type: "text",
                value: name.current ? name.current.value : "",
                name: "Name",
                label: "Name",
                ref: name,
              },
              {
                type: "password",
                value: password.current ? password.current.value : "",
                name: "password",
                label: "Password",
                ref: password,
              },
              {
                type: "password",
                value: passwordVerif.current ? passwordVerif.current.value : "",
                name: "password",
                label: "Confirm Password",
                errorMsg: "Not the same password !",
                ref: passwordVerif,
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default RegisterTemplate;
