import React, { useRef } from "react";
import "./conversation.scss";
import { Msg } from "../molecules/";
import msgType from "../../types/msgType";
import convData from "../../types/convDataType";
import { IconButton } from "../atoms";

interface Props {
  msgList: msgType[];
  sendMsg: (msg: msgType) => void;
  convData: convData;
}

const Conversation: React.FC<Props> = ({ msgList, sendMsg, convData }) => {
  const inputValue = useRef<HTMLInputElement>(null);

  const send: () => void = () => {
    if (inputValue.current) {
      console.log(inputValue.current.value);
      if (inputValue.current.value !== "") {
        sendMsg({
          sender: JSON.parse(localStorage.getItem("data")!).email,
          content: inputValue.current.value,
          receiver:
            convData.user1 === JSON.parse(localStorage.getItem("data")!).email
              ? convData.user2!
              : convData.user1!,
          convId: convData.convId!,
        });
        inputValue.current.value = "";
      } else {
        return;
      }
    } else {
      console.log("No current");
    }
  };

  const anchorScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (anchorScrollRef.current) {
      anchorScrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }
  };

  handleScroll();

  return (
    <section className="section-conversation">
      <div className="scrolling-section">
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
        <div ref={anchorScrollRef} id="anchor-scroll"></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Start chatting"
          // value={inputValue.current.value}
          ref={inputValue}
        />
        <IconButton onClick={() => send()} icon="send.png" />
      </div>
    </section>
  );
};

export default Conversation;
