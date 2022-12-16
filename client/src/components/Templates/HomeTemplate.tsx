import React, { useEffect, useState } from "react";
import "./homeTemplate.scss";
import { HotBar, NavBar, ConvBar, Conversation } from "../sections";
import convData from "../../types/convDataType";
import msgData from "../../types/msgType";
import { send } from "process";

interface Props {
  convList: convData[];
  updateActualConv: (conv: convData) => void;
  actualConv: convData;
  msgList: msgData[];
  send: (msg: msgData) => void;
}

const HomeTemplate: React.FC<Props> = ({
  convList,
  updateActualConv,
  actualConv,
  msgList,
  send,
}) => {
  return (
    <>
      <HotBar name={actualConv.user2!} />
      <main>
        <NavBar />
        <ConvBar
          convList={convList}
          onClick={(convData: convData) => updateActualConv(convData)}
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
