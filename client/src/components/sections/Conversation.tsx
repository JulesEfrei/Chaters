import React from "react";
import "./conversation.scss";
import { Msg } from "../molecules/";

interface Props {}

const Conversation: React.FC<Props> = ({}) => {
  return (
    <section className="section-conversation">
      <div className="msg-wrapper">
        <Msg
          sender="Bot Salamèche"
          content="Bonjour est bienvenue sur Chaters !"
          className="msg-sended"
          date="28 Oct."
        />
        <Msg
          sender="Bot Salamèche"
          content="Bonjour est bienvenue sur Chaters !"
          className="msg-recieved"
          date="28 Oct."
        />
        <Msg
          sender="Bot Salamèche"
          date="15h03"
          content="vfs !"
          className="msg-sended"
        />
        <Msg
          sender="Bot Salamèche"
          content="Bonjour est bienvenue sur Chaters !"
          className="msg-recieved"
          date="15h10"
        />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Start chatting" />
        <button>Send</button>
      </div>
    </section>
  );
};

export default Conversation;
