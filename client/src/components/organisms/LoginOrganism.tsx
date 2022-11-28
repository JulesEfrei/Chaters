import React from "react";
import FormTypes from "../../types/formType";
import { generateToast, verifForm } from "../../utils/formVerification";

import { LoginTemplate } from "../Templates/";

const LoginOrganism: React.FC = () => {
  const verif = async (data: FormTypes) => {
    if (verifForm(data).error.length > 0) {
      generateToast("Invalid Form !", "error");
    } else {
      generateToast("Sucess", "success");

      const req = await fetch(`http://10.3.228.8:8080/auth/sign-in`, {
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

      //LOCAL STORAGE & GESTION ERREUR
    }
  };

  return <LoginTemplate handleSubmit={(data) => verif(data)} />;
};

export default LoginOrganism;
