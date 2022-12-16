import React, { useState } from "react";
import "./conversation.scss";
import { Msg } from "../molecules/";
import msgType from "../../types/msgType";
import convData from "../../types/convDataType";
import { send } from "process";
import { VoidExpression } from "typescript";

interface Props {
  msgList: msgType[];
  sendMsg: (msg: msgType) => void;
  convData: convData;
}

const Conversation: React.FC<Props> = ({ msgList, sendMsg, convData }) => {
  const [value, setValue] = useState("");

  const send: () => void = () => {
    if (value !== "") {
      sendMsg({
        sender: JSON.parse(localStorage.getItem("data")!).email,
        content: value,
        receiver:
          convData.user1 == JSON.parse(localStorage.getItem("data")!).email
            ? convData.user2!
            : convData.user1!,
        convId: convData.convId!,
      });
      setValue("");
    } else {
      console.log("NON");
    }
  };

  return (
    <section className="section-conversation">
      <div className="msg-wrapper">
        {msgList.length !== 0
          ? msgList.map((elm, index) => {
              return (
                <Msg
                  sender={elm.sender}
                  content={elm.content}
                  className={
                    elm.sender !==
                    JSON.parse(localStorage.getItem("data")!).email
                      ? "msg-received"
                      : "msg-sended"
                  }
                  date={elm.date!}
                  key={`${elm.date}-msg-${index}`}
                />
              );
            })
          : null}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Start chatting"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => send()}>Send</button>
      </div>
    </section>
  );
};

export default Conversation;
