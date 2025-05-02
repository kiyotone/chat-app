"use client";
import React, { useEffect, useRef } from "react";
import MessageBlob from "./MessageBlob";

function ChatHistory({ messages }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="h-[58rem] overflow-y-scroll text-white p-4 flex flex-col gap-2 scrollbar-none"
    >
      {messages &&
        messages.map((message, index) => (
          <div key={index}>
            <MessageBlob message={message.message} sender={message.sender} />
          </div>
        ))}
    </div>
  );
}

export default ChatHistory;
