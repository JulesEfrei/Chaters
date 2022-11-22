import React from "react";

import "./button.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="atom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
