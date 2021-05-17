import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import feed from "../../../pages/posts/Card";
import { useHistory } from "react-router-dom";


import "./Chat.css";

const ENDPOINT = "http://localhost:5000/";

let socket;

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // socket = io(ENDPOINT);
    socket = io.connect("http://localhost:5000", connectionOptions);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);
  const sendMessage = (event) => {
    //event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const history = useHistory();

  const changeRoute = () =>{
    history.push('feed');
  }

  const disconnectSocket = (socket) => {
    try {
      socket && socket.emit("sign-out");
      changeRoute()
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div className="outerContainerc2">
      <div className="containerc2">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <button className='sendButton' type={"button"} onClick={() => disconnectSocket(socket) }>
        Leave Chat
      </button>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
