"use client";
import React, { useContext, useEffect } from "react";
import MessageBlob from "./MessageBlob";

function ChatHistory({ messages }) {
  console.log("ChatHistory messages:", messages);
  return (
    <div className="">
      {messages &&
        messages.map((message, index) => {
          return (
            <div key={index}>
              <MessageBlob message={message.message} sender={message.sender} />
            </div>
          );
        })}
    </div>
  );
}

export default ChatHistory;
