"use client";

import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { BiImageAlt } from "react-icons/bi";
import { TiAttachment } from "react-icons/ti";
function MessageBox({ sendMessage }) {
  const [messageTyped, changeTyped] = useState("");

  const textkey = (e) => {
    if (e.keyCode == 13) {
      addMessage();
      e.target.value = "";
    }
  };

  const addMessage = () => {
    if (messageTyped.trim() !== "") {
      sendMessage(messageTyped);
      changeTyped("");
    }
  };
  const handleSendClick = () => {
    addMessage();
  };

  return (
    <div className="relative flex w-full  items-center text-[#757585]">
      <input
        id="this"
        type="text"
        onKeyDown={(e) => textkey(e)}
        onChange={(e) => changeTyped(e.target.value)}
        className="bg-[#15171C] h-12 w-full p-4 rounded-[1rem] placeholder:text-gray-500"
        placeholder="Type your message..."
      ></input>
      <div className="absolute right-3 flex space-x-3 text-[20px]">
        <div className="flex space-x-1">
          <BiImageAlt />
          <TiAttachment />
        </div>

        <div
          className="flex items-center w-[20px] h-[20px] bg-yellow-200 rounded hover:cursor-pointer"
          onClick={handleSendClick}
        >
          <IoSend className="ml-[3px] text-[15px]" />
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
