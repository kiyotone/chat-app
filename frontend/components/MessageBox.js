import React, { useState } from 'react'
import {IoSend} from 'react-icons/io5'
import {BiImageAlt} from 'react-icons/bi'
import {TiAttachment} from 'react-icons/ti'
import { useMessages } from './MessageContext';

function MessageBox() {
  const {messages,dispatch} = useMessages();

  const [messageTyped,changeTyped] = useState("")

  const textkey =(e)=>{

    if (e.keyCode ==13){
      addMessage()
      e.target.value = "";
    }
    
  }

  const addMessage = () =>{
    if (messageTyped != ""){
    const temp = {
        content: messageTyped,
        sender : "ChatPerson"
      }


      dispatch({type:"add",payload:temp})
      changeTyped("");
      getResponse(temp);  

    } 

  }

  async function getResponse(data_response){

    try {
      console.log(data_response)
      const response = await fetch('http://127.0.0.1:8000/bot/post',{
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_response)
      }
      );

      const data = await response.json();
      console.log(data);
      dispatch({type:"add",payload:data.data});
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative flex items-center text-[#757585]">
            <input id="this" type="text" onKeyDown={(e)=>textkey(e)} onChange={(e)=>changeTyped(e.target.value)} className="bg-[#15171C] h-12 w-[35rem] p-4 rounded-[1rem] placeholder:text-gray-500" placeholder='Type your message...'></input>
            <div className="absolute right-3 flex space-x-3 text-[20px]">
              
              <div className="flex space-x-1">
                <BiImageAlt />
                <TiAttachment />              
              </div>

              <div className="flex items-center w-[20px] h-[20px] bg-yellow-200 rounded hover:cursor-pointer" onClick={addMessage}>
                
                  <IoSend className="ml-[3px] text-[15px]"/>
                
              </div>
            
            </div>

    </div>
  )
}

export default MessageBox