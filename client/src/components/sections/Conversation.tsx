import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./conversation.scss";
import { Msg } from "../molecules/";
import msgType from "../../types/msgType";
import convData from "../../types/convDataType";
import { IconButton } from "../atoms";
import useFetch from "../../utils/useFetch";
import msgData from "../../types/msgType";
import { Socket } from "socket.io-client";

interface Props {
  sendMsg: (msg: msgType) => void;
  convData: convData;
  socket: Socket;
}

const Conversation: React.FC<Props> = ({ sendMsg, convData, socket }) => {
  console.log("Conversation");

  const inputValue = useRef<HTMLInputElement>(null);

  const {
    response,
    error,
    isLoading,
  }: {
    response: msgData[];
    error: Error;
    isLoading: Boolean;
  } = useFetch(`http://localhost:8080/msg/${convData.convId}`);

  const [socketMsg, setSocketMsg] = useState<msgData[]>([]);

  socket.on("msg", (data) => {
    console.log("Message received!");
    setSocketMsg((curr) => [...curr, data]);
    console.log(socketMsg);
  });

  // const msgList = useMemo(() => {
  //   return !isLoading ? response.concat(socketMsg) : [];
  // }, [response, socketMsg]);

  const msgList: msgData[] = [];

  const send: () => void = () => {
    if (inputValue.current) {
      if (inputValue.current.value !== "") {
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
          {!error ? (
            msgList !== null ? (
              msgList.length !== 0 ? (
                msgList.map((elm, index) => {
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
              ) : null
            ) : null
          ) : (
            <p>Error Sorry !</p>
          )}
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
