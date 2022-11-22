import React from "react";
import FormTypes from "../../types/formType";
import { generateToast, verifForm } from "../../utils/formVerification";

import { LoginTemplate } from "../Templates/";

const LoginOrganism: React.FC = () => {
  const verif = (data: FormTypes) => {
    if (verifForm(data).error.length > 0) {
      generateToast("Invalid Form !", "error");
    } else {
      generateToast("Sucess", "success");
      //TRY CONNEXION
    }
  };

  return <LoginTemplate handleSubmit={(data) => verif(data)} />;
};

export default LoginOrganism;
