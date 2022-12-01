import React from "react";
import "./homeTemplate.scss";
import { HotBar, NavBar, ConvBar, Conversation } from "../sections";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <HotBar name="Jules" />
      <main>
        <NavBar />
        <ConvBar />
        <Conversation />
      </main>
    </>
  );
};

export default HomeTemplate;
