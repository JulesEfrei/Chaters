import React from "react";

import { RegisterTemplate } from "../Templates/";
import FormTypes from "../../types/formType";
import { verifForm, generateToast } from "../../utils/formVerification";
import { useNavigate } from "react-router";

const RegisterOrganism: React.FC = () => {
  const navigate = useNavigate();

  const verif = async (data: FormTypes) => {
    if (data.password !== data.passwordVerif) {
      generateToast("Error !", "error");
    } else {
      if (verifForm(data).error.length > 0) {
        generateToast("Error !", "error");
      } else {
        generateToast("Success !", "success");

        const req = await fetch(`http://10.3.228.8:8080/auth/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        });
        const res = await req.json();

        //GESTION ERREUR

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return <RegisterTemplate handleSubmit={(data) => verif(data)} />;
};

export default RegisterOrganism;
