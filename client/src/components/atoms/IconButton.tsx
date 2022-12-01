import React from "react";

import "./iconButton.scss";

interface Props {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <button className="atom-icon-button" onClick={onClick}>
      <img src={require(`../../assets/img/${icon}`)} alt="Icon" />
    </button>
  );
};

export default IconButton;
