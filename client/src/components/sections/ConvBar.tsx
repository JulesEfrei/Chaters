import React, { useState } from "react";
import "./convBar.scss";
import { ConvBlock } from "../molecules/";
import convData from "../../types/convDataType";
import { Input } from "../atoms/";

interface Props {
  convList: convData[];
  onClick: (convData: convData) => void;
  newConv: (data: { user1: string; user2: string }) => void;
}

const ConvBar: React.FC<Props> = ({ convList, onClick, newConv }) => {
  const [show, setShow] = useState<Boolean>(false);
  const [mail, setMail] = useState<string>("");

  const handleClick = () => {
    if (mail !== "") {
      newConv({
        user1: JSON.parse(localStorage.getItem("data")!).email,
        user2: mail,
      });
      setShow(false);
    } else {
      console.log("ERROR => Mail empty");
    }
  };

  return (
    <section className="section-conv-bar">
      <div className="button-container">
        <button onClick={() => setShow(true)}>New Conversation</button>
      </div>
      {convList !== null
        ? convList.map((elm, index) => {
            return (
              <ConvBlock
                name={
                  JSON.parse(localStorage.getItem("data")!).email == elm.user1
                    ? elm.user2!
                    : elm.user1!
                }
                selected={false}
                onClick={() => onClick(elm)}
                key={elm.convId}
              />
            );
          })
        : null}
      {show === true ? (
        <div className="modal">
          <h1>Who do you want to start a conversation with?</h1>
          <Input
            value={mail}
            handleChange={(value) => setMail(value)}
            type="email"
            name="Email"
            placeholder="Person's Email"
          />
          <button onClick={() => handleClick()}>Start Chatting!</button>
          <button onClick={() => setShow(false)}></button>
        </div>
      ) : null}
    </section>
  );
};

export default ConvBar;
