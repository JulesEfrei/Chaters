import React from "react";
import "./convBlock.scss";

interface Props {
  name: string;
  selected: boolean;
  onClick: () => void;
}

const ConvBlock: React.FC<Props> = ({ name, selected = false, onClick }) => {
  return (
    <div className="molecule-conv-block" onClick={onClick}>
      <h3>{name}</h3>
    </div>
  );
};

export default ConvBlock;
