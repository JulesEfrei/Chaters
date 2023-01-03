import React, { useRef } from "react";
import "./conversation.scss";
import { Msg } from "../molecules/";
import msgType from "../../types/msgType";
import convData from "../../types/convDataType";
import { IconButton } from "../atoms";
import useFetch from "../../utils/useFetch";
import msgData from "../../types/msgType";

interface Props {
  sendMsg: (msg: msgType) => void;
  convData: convData;
}

const Conversation: React.FC<Props> = ({ sendMsg, convData }) => {
  const inputValue = useRef<HTMLInputElement>(null);

  const fetchMsgList: msgData[] = useFetch(
    `http://localhost:8080/msg/${convData.convId}`
  ).response;

  let msgList = fetchMsgList;

  console.log("Conversation");

  const send: () => void = () => {
    if (inputValue.current) {
      if (inputValue.current.value !== "") {
        console.log(inputValue.current.value);
        const msg = {
          sender: JSON.parse(localStorage.getItem("data")!).email,
          content: inputValue.current.value,
          receiver:
            convData.user1 === JSON.parse(localStorage.getItem("data")!).email
              ? convData.user2!
              : convData.user1!,
          convId: convData.convId!,
        };
        sendMsg(msg);
        msgList = [...msgList, msg];
        inputValue.current.value = "";
      } else {
        return;
      }
    } else {
      console.log("No current");
    }
  };

  const anchorScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = async () => {
    const divReady = await msgList;
    if (anchorScrollRef.current && divReady) {
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
          {msgList !== null
            ? msgList.length !== 0
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
              : null
            : null}
        </div>
        <div ref={anchorScrollRef} id="anchor-scroll"></div>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Start chatting" ref={inputValue} />
        <IconButton onClick={() => send()} icon="send.png" />
      </div>
    </section>
  );
};

export default Conversation;
