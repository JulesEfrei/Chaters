import React from "react";
import "./convBar.scss";
import { ConvBlock } from "../molecules/";
import { Button } from "../atoms/";

interface Props {}

const ConvBar: React.FC<Props> = ({}) => {
  return (
    <section className="section-conv-bar">
      <div className="button-container">
        <button>New Conversation</button>
      </div>
      <ConvBlock name="Bot Slamèche" selected={false} onClick={() => {}} />
    </section>
  );
};

export default ConvBar;
