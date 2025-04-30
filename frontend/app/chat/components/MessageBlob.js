import React from 'react'
import Cookies from 'js-cookie'

function MessageBlob({message,sender}) {
    const user = Cookies.get("username")
    
    return (
        <div className="w-full">
        {   sender==user ? <div className="pr-6 flex w-full pt-8 flex-col items-end"> 
        <div className="bg-[#B785F6] justify-end p-2 w-[22em] rounded-t-2xl rounded-bl-2xl">{message}</div>
        </div>
        :
        <div className="pl-6 flex pt-8 flex-col"> 
        <div className="bg-[#000000] p-2 w-[22em] rounded-b-2xl rounded-tr-2xl ml-0">{message}</div>
         </div>
            }
            
        </div>
      )
}

export default MessageBlob