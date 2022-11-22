import React from "react";

import { RegisterTemplate } from "../Templates/";
import FormTypes from "../../types/formType";
import { verifForm, generateToast } from "../../utils/formVerification";

const RegisterOrganism: React.FC = () => {
  const verif = (data: FormTypes) => {
    if (data.password !== data.passwordVerif) {
      generateToast("Error !", "error");
    } else {
      if (verifForm(data).error.length > 0) {
        generateToast("Error !", "error");
      } else {
        generateToast("Success !", "success");
        //CREATE ACCOUNT
      }
    }
  };

  return <RegisterTemplate handleSubmit={(data) => verif(data)} />;
};

export default RegisterOrganism;
