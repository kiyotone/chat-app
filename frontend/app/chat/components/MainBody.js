import React from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

function MainBody() {
  return (
    <div className="flex bg-[#20232b] h-full">
      {/* Sidebar: Contact List */}
      <div className="w-[16rem] h-full ">
        <ContactList />
      </div>

      {/* Main chat area */}
      <div className="flex-1 h-full ">
        <Chat />
      </div>
    </div>
  );
}

export default MainBody;
