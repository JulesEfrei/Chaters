import React, { useCallback, useState } from "react";
import "./homeTemplate.scss";
import { HotBar, NavBar, ConvBar, Conversation } from "../sections";
import convData from "../../types/convDataType";
import msgData from "../../types/msgType";
import { Socket } from "socket.io-client";

interface Props {
  logout: () => void;
  send: (msg: convData, convId: string) => void;
  room: (roomName: string) => void;
  // msg: msgData[];
  // reset: () => void;
  socket: Socket;
}

const HomeTemplate: React.FC<Props> = ({ logout, send, room, socket }) => {
  const [actualConv, setActualConv] = useState<convData>({}); //Only State of the component

  console.log("HomeTemplate");

  let convList: { convId: string; user1: string; user2: string }[] = JSON.parse(
    localStorage.getItem("conversation")!
  )
    ? JSON.parse(localStorage.getItem("conversation")!)
    : [];

  const changeRoom = useCallback(
    (convData: convData) => {
      console.log("ChangeRoom callback => homeTemplate");
      setActualConv(convData);
      room(convData.convId!);
    },
    [actualConv, room]
  );

  //Create new conversation & store it in LocalStorage
  const newConv: (convData: { user1: string; user2: string }) => void = async (
    convData
  ) => {
    const req = await fetch(`http://localhost:8080/conv/new-conversation`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user1: convData.user1,
        user2: convData.user2,
      }),
    });

    const res = await req.json();

    const temp: convData[] = [
      ...convList,
      {
        user1: res.user1,
        user2: res.user2,
        convId: res._id,
      },
    ];
    localStorage.setItem("conversation", JSON.stringify([...temp]));
    setActualConv({
      user1: res.user1,
      user2: res.user2,
      convId: res._id,
    });
  };

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
          onClick={(convData: convData) => changeRoom(convData)}
          newConv={(data: { user1: string; user2: string }) => newConv(data)}
        />
        {Object.values(actualConv).length !== 0 ? (
          <Conversation
            convData={actualConv}
            sendMsg={(msg: msgData) => send(msg, actualConv.convId!)}
            socket={socket}
          />
        ) : null}
      </main>
    </>
  );
};

export default HomeTemplate;
