import React from 'react'
import MessageBlob from './MessageBlob'

function ChatHistory() {
  const messages = [{
    content: "i am a great person",
    sender : "Hane"
},
{
  content: "Almost Complete",
  sender : "ChatPerson"
}
]
  return (
    <div className="" >

        <MessageBlob message={messages[0]} user="ChatPerson"/>
        <MessageBlob message={messages[1]} user="ChatPerson"/>
        
        

    </div>
  )
}

export default ChatHistory