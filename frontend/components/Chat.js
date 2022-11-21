import React from 'react'
import ChatHistory from './ChatHistory'
import MessageBox from './MessageBox'

function Chat() {
  return (
    <div className="flex bg-[#1e2028] flex-col mt-5 rounded-t-3xl ml-5 items-center w-[40rem] h-screen">

    <div className="flex w-full bg-black h-[52px] rounded-t-3xl">

    <div className="flex text-gray-500 text-[16px] items-center pl-3">
      Conversations With Kirtan Kunwar
    </div>


   </div>
      <div className="w-full">
        <ChatHistory />
       </div>
      <div className="absolute bottom-3 ">
      <MessageBox />
    </div>

    </div>
  )
}

export default Chat