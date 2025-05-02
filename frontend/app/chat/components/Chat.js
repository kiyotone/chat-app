"use client";
import React, { useEffect } from "react";
import ChatHistory from "./ChatHistory";
import MessageBox from "./MessageBox";
import Cookie from "js-cookie";
import { getChatHistory } from "@/app/api/chat";

function Chat() {
  const wsUrl = "ws://127.0.0.1:8000/ws/chatroom/FirstGroup/";
  const [messages, setMessages] = React.useState([]);
  const [socket, setSocket] = React.useState(null);

  useEffect(async () =>  {
    // do if once when the component mounts
    
    const response = await getChatHistory("FirstGroup");

    if (response.status === 200) {
      setMessages(response.data);
    }
    else {
      console.error("Error fetching chat history:", response.statusText);
    }    

    const websocket = new WebSocket(wsUrl);

    websocket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received message:", data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    websocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setSocket(websocket);
  }, []);

  const sendMessage = (message) => {
    const data = {
      message: message,
      sender: Cookie.get("username"),
    };
    console.log("Sending message:", data);
    socket.send(JSON.stringify(data));
  };

  return (
    <div className="flex w-full flex-col bg-[#1e2028] pt-5 rounded-3xl pl-5 items-center h-full">
      <div className="flex w-full bg-black h-[52px] rounded-3xl items-center pl-3 text-gray-500 text-[16px]">
        Conversations With Kirtan Kunwar
      </div>
      {
        socket &&
        <div className="flex flex-col w-full h-full bg-[#1e2028] rounded-b-3xl">
        <div className="flex-1 w-full overflow-y-auto px-4 py-2">
          <ChatHistory messages={messages} />
        </div>
        <div className="w-full px-20 pb-5">
          <MessageBox sendMessage={sendMessage} />
        </div>
      </div>
      }
    </div>
  );
}

export default Chat;
