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
        try {
          //Try fetch
          const req = await fetch(`http://localhost:8080/auth/register`, {
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

          //Get response
          const res = await req.json();

          //Status code 400-499
          if (!req.ok) {
            throw new Error(JSON.stringify(res));
          } else {
            //Status code 200-299
            generateToast("User Created!", "success");

            //Navigate login page
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
        } catch (err: any) {
          generateToast(JSON.parse(err.message).error, "error");
        }
      }
    }
  };

  return <RegisterTemplate handleSubmit={(data) => verif(data)} />;
};

export default RegisterOrganism;
