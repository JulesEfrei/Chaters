import React from "react";
import { ToastContainer } from "react-toastify";

import { LoginOrganism } from "../organisms";

const LoginScreen: React.FC = () => {
  return (
    <>
      <LoginOrganism />
      <ToastContainer />
    </>
  );
};

export default LoginScreen;
