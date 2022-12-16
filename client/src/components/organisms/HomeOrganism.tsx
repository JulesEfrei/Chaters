import React, { useState, useEffect, useCallback, useRef } from "react";
import { io } from "socket.io-client";
import convData from "../../types/convDataType";
import msgData from "../../types/msgType";

import { HomeTemplate } from "../Templates/";

const HomeOrganism: React.FC = () => {
  let [actualMsgList, setActualMsgList] = useState<msgData[]>([]);
  const [actualConv, setActualConv] = useState<convData>({});
  const [conv, setConv] = useState<
    { convId: string; user1: string; user2: string }[]
  >(
    JSON.parse(localStorage.getItem("conversation")!)
      ? JSON.parse(localStorage.getItem("conversation")!)
      : []
  );

  //Socket.io
  const socket = io("http://localhost:8081"); //API Url

  socket.on("connect", () => {
    console.log("Connected from Client : ", socket.id);

    socket.on("msg", (data) => {
      addMsgList(data);
    });
  });

  const roomChange: (roomName: string) => void = (roomName: string) => {
    socket.emit("change-room", roomName);
  };

  //Send msg to socket.io
  function sendMsg(msg: convData) {
    socket.emit("new-msg", { ...msg, room: actualConv.convId });
  }

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

    console.log(res);

    addConv(res);
    const temp = [
      ...conv,
      {
        user1: res.user1,
        user2: res.user2,
        convId: res._id,
      },
    ];
    localStorage.setItem("conversation", JSON.stringify([...temp]));
  };

  const getMsgList: (convId: string) => void = async (convId) => {
    const req = await fetch(`http://localhost:8080/msg/${convId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const res = await req.json();
    setActualMsgList(res);
  };

  const updateMsgList = useCallback(
    (convData: convData) => {
      getMsgList(convData.convId!);
    },
    [actualMsgList]
  );

  const addMsgList = useCallback(
    (msg: msgData) => {
      setActualMsgList((last) => [...last, msg]);
    },
    [actualMsgList]
  );

  const addConv = useCallback(
    (convData: { user1: string; user2: string; _id: string }) => {
      setConv((last) => [
        ...last,
        {
          user1: convData.user1,
          user2: convData.user2,
          convId: convData._id,
        },
      ]);
    },
    [conv]
  );

  const updateAll = useCallback(
    (convData: convData) => {
      setActualConv((last) => convData);
      updateMsgList(convData);
      roomChange(convData.convId!);
    },
    [actualConv, actualMsgList]
  );

  return (
    <HomeTemplate
      convList={conv}
      newConv={(data: { user1: string; user2: string }) => newConv(data)}
      updateActualConv={(convData: convData) => {
        updateAll(convData);
      }}
      actualConv={actualConv}
      msgList={actualMsgList}
      send={(msg: msgData) => sendMsg(msg)}
    />
  );
};

export default HomeOrganism;
