import React from "react";
import "./hotBar.scss";

import { IconButton } from "../atoms/";

interface Props {
  name: string;
}

const HotBar: React.FC<Props> = ({ name = "" }) => {
  return (
    <section className="section-hot-bar">
      <div className="icon-container">
        <IconButton icon="logo.png" onClick={() => {}} />
      </div>
      <div className="title-container">
        <h1>{name}</h1>
      </div>
    </section>
  );
};

export default HotBar;
