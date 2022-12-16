import React from "react";
import { ToastContainer } from "react-toastify";

import { HomeOrganism } from "../organisms";

const HomeScreen: React.FC = () => {
  return (
    <>
      <HomeOrganism />
      <ToastContainer />
    </>
  );
};

export default HomeScreen;
