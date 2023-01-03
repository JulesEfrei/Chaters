import React from "react";
import { io } from "socket.io-client";
import convData from "../../types/convDataType";
import { HomeTemplate } from "../Templates/";

const HomeOrganism: React.FC<{ logout: () => void }> = ({ logout }) => {
  //Socket.io
  const socket = io("http://localhost:8081"); //API Url

  //Socket.io event
  socket.on("connect", () => {
    console.log("Connected from Client : ", socket.id);

    // socket.on("msg", (data) => {
    //   updateMsgList();
    // });
  });

  //Change room in socket.io (=> Change conversation in socket.io)
  const roomChange: (roomName: string) => void = (roomName: string) => {
    console.log("Change ROOM");
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
    />
  );
};

export default HomeOrganism;
