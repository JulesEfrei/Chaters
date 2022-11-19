import React from "react";

import "./button.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  const handleClick: () => void = () => {};

  return (
    <button className="atom-button animation" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
