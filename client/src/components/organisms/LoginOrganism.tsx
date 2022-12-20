import React from "react";
import { useNavigate } from "react-router";
import FormTypes from "../../types/formType";
import { generateToast, verifForm } from "../../utils/formVerification";

import { LoginTemplate } from "../Templates/";

const LoginOrganism: React.FC<{ loginState: () => void }> = ({
  loginState,
}) => {
  const navigate = useNavigate();

  const verif = async (data: FormTypes) => {
    if (verifForm(data).error.length > 0) {
      generateToast("Invalid Form !", "error");
    } else {
      try {
        const req = await fetch(`http://localhost:8080/auth/sign-in`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
        const res = await req.json();

        if (!req.ok) {
          throw new Error(JSON.stringify(res));
        } else {
          generateToast("Successful connection", "success");

          localStorage.setItem("data", JSON.stringify(res));
          loginState();

          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
      } catch (err: any) {
        generateToast(JSON.parse(err.message).error, "error");
      }
    }
  };

  return <LoginTemplate handleSubmit={(data) => verif(data)} />;
};

export default LoginOrganism;
