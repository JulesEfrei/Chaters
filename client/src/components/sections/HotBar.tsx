import React from "react";
import "./hotBar.scss";
import { useNavigate } from "react-router";
import { IconButton } from "../atoms/";

interface Props {
  name: string;
}

const HotBar: React.FC<Props> = ({ name = "" }) => {
  const navigation = useNavigate();
  console.log("HotBar");

  return (
    <section className="section-hot-bar">
      <div className="icon-container">
        <IconButton icon="logo.png" onClick={() => navigation("/")} />
      </div>
      <div className="title-container">
        <h1>{name}</h1>
      </div>
    </section>
  );
};

export default HotBar;
