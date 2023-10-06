import React from 'react'

function MessageBlob({message,user}) {
    
    
    return (
        <div className="w-full">
        {   message.sender==user ? <div className="pr-6 flex w-full pt-8 flex-col items-end"> 
        <div className="bg-[#B785F6] justify-end p-2 w-[22em] rounded-t-2xl rounded-bl-2xl">{message.content}</div>
        </div>
        :
        <div className="pl-6 flex pt-8 flex-col"> 
        <div className="bg-[#000000] p-2 w-[22em] rounded-b-2xl rounded-tr-2xl ml-0">{message.content}</div>
         </div>
            }
            
        </div>
      )
}

export default MessageBlob