import React, { useRef, useState } from "react";
import "./convBar.scss";
import { ConvBlock } from "../molecules/";
import convData from "../../types/convDataType";
import { Button, Input } from "../atoms/";
import { generateToast } from "../../utils/formVerification";

interface Props {
  convList: convData[];
  onClick: (convData: convData) => void;
  newConv: (data: { user1: string; user2: string }) => void;
  actualConv: convData;
}

const ConvBar: React.FC<Props> = ({
  convList,
  onClick,
  newConv,
  actualConv,
}) => {
  const [show, setShow] = useState<Boolean>(false);
  const mail = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (mail.current) {
      if (mail.current.value !== "") {
        newConv({
          user1: JSON.parse(localStorage.getItem("data")!).email,
          user2: mail.current.value,
        });
        setShow(false);
      } else {
        generateToast("Mail invalid!", "error");
      }
    }
  };

  return (
    <section className="section-conv-bar">
      <div className="top-content">
        <div className="button-container">
          <Button onClick={() => setShow(true)}>New Conversation</Button>
        </div>
        <p>All Message</p>
      </div>
      {convList !== null
        ? convList.map((elm, index) => {
            return (
              <ConvBlock
                name={
                  JSON.parse(localStorage.getItem("data")!).email === elm.user1
                    ? elm.user2!
                    : elm.user1!
                }
                selected={actualConv === elm ? true : false}
                onClick={() => onClick(elm)}
                key={elm.convId}
              />
            );
          })
        : null}
      {show === true ? (
        <div className="modal-container">
          <div className="modal">
            <h1>Start a conversation with?</h1>
            <Input
              value={mail.current?.value}
              type="email"
              name="Email"
              label="Person's Email"
              ref={mail}
            />
            <div className="button-container">
              <Button onClick={() => handleClick()}>Start Chatting!</Button>
              <Button onClick={() => setShow(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ConvBar;
