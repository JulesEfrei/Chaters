import React from "react";
import { ToastContainer } from "react-toastify";

import { HomeOrganism } from "../organisms";

const HomeScreen: React.FC<{ logout: () => void }> = ({ logout }) => {
  return (
    <>
      <HomeOrganism logout={logout} />
      <ToastContainer />
    </>
  );
};

export default HomeScreen;
