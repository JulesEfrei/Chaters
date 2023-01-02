import React from "react";
import "./homeTemplate.scss";
import { HotBar, NavBar, ConvBar, Conversation } from "../sections";
import convData from "../../types/convDataType";
import msgData from "../../types/msgType";

interface Props {
  convList: convData[];
  updateActualConv: (conv: convData) => void;
  actualConv: convData;
  msgList: msgData[];
  send: (msg: msgData) => void;
  newConv: (data: { user1: string; user2: string }) => void;
  logout: () => void;
}

const HomeTemplate: React.FC<Props> = ({
  convList,
  updateActualConv,
  actualConv,
  msgList,
  send,
  newConv,
  logout,
}) => {
  return (
    <>
      <HotBar
        name={
          JSON.parse(localStorage.getItem("data")!).email === actualConv.user1
            ? actualConv.user2!
            : actualConv.user1!
        }
      />
      <main>
        <NavBar logoutState={logout} />
        <ConvBar
          convList={convList}
          actualConv={actualConv}
          onClick={(convData: convData) => updateActualConv(convData)}
          newConv={(data: { user1: string; user2: string }) => newConv(data)}
        />
        {Object.values(actualConv).length !== 0 ? (
          <Conversation
            msgList={msgList}
            convData={actualConv}
            sendMsg={(msg: msgData) => send(msg)}
          />
        ) : null}
      </main>
    </>
  );
};

export default HomeTemplate;
