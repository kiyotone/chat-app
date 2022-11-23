import React, { useContext, useEffect } from 'react'
import MessageBlob from './MessageBlob'
import { useMessages } from './MessageContext'

function ChatHistory() {
  const {messages} = useMessages();

  return (
    <div className="">
{messages &&
  messages.map((message)=>{
    return (
      <MessageBlob message={message} user="ChatPerson"/>
    )
  }
  
  )

}
        
        
        

    </div>
  )
}

export default ChatHistory