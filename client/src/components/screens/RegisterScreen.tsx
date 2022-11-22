import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RegisterOrganism } from "../organisms";

const RegisterScreen: React.FC = () => {
  return (
    <>
      <RegisterOrganism />
      <ToastContainer />
    </>
  );
};

export default RegisterScreen;
