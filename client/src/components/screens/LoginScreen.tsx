import React from "react";
import { ToastContainer } from "react-toastify";

import { LoginOrganism } from "../organisms";

const LoginScreen: React.FC<{ login: () => void }> = ({ login }) => {
  return (
    <>
      <LoginOrganism loginState={login} />
      <ToastContainer />
    </>
  );
};

export default LoginScreen;
