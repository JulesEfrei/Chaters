import React from "react";

import "./iconButton.scss";

interface Props {
  icon: string;
  onClick: () => void;
  active?: boolean;
}

const IconButton: React.FC<Props> = ({ icon, onClick, active = false }) => {
  return (
    <button
      className={`atom-icon-button ${active && "active"}`}
      onClick={onClick}
    >
      <img src={require(`../../assets/img/${icon}`)} alt="Icon" />
    </button>
  );
};

export default IconButton;
