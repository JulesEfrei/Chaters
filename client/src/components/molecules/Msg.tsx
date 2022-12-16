import React from "react";
import "./msg.scss";

interface Props {
  sender: string;
  content: string;
  className: string;
  date: string;
}

const Msg: React.FC<Props> = ({ sender, content, className = "", date }) => {
  return (
    <div className={`molecule-msg ${className}`}>
      <div className="top">
        <h4>{sender}</h4>
        <p>{date}</p>
      </div>
      <div className="content-container">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Msg;
