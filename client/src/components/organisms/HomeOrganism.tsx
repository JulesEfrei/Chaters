import React, { useCallback, useMemo, useState } from "react";
import { io } from "socket.io-client";
import convData from "../../types/convDataType";
import msgData from "../../types/msgType";
import { HomeTemplate } from "../Templates/";

const HomeOrganism: React.FC<{ logout: () => void }> = ({ logout }) => {
  //Socket.io
  const socket = io("http://localhost:8081"); //API Url
  // const [msg, setMsg] = useState<msgData[]>([]);

  //Socket.io event
  socket.on("connect", () => {
    console.log("Connected from Client : ", socket.id);

    // socket.on("msg", (data) => {
    // console.log(data);
    // setMsg((curr) => [...curr, data]);
    // });
  });

  //Change room in socket.io (=> Change conversation in socket.io)
  const roomChange: (roomName: string) => void = (roomName: string) => {
    console.log("Changement de room Client => ", roomName);
    socket.emit("change-room", roomName);
  };

  //Send msg to socket.io
  function sendMsg(msg: convData, convId: string) {
    socket.emit("new-msg", { ...msg, room: convId });
  }

  return (
    <HomeTemplate
      logout={logout}
      send={(msg: convData, convId: string) => sendMsg(msg, convId)}
      room={(roomName: string) => roomChange(roomName)}
      socket={socket}
    />
  );
};

export default HomeOrganism;
