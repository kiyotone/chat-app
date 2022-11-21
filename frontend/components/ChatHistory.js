import React from 'react'
import MessageBlob from './MessageBlob'

function ChatHistory({messages}) {
 
  return (
    <div className="" >
{
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