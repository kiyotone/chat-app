import React, { useState } from 'react'
import {IoIosSearch} from 'react-icons/io';
import {MdOutlineKeyboardArrowDown , MdOutlineKeyboardArrowUp}  from "react-icons/md"
import MessageBar from './MessageBar';

function ContactList() {

    const [Unread,changeUnread] =  useState(true);
    const [All,changeAll] =  useState(true);

    const toggleUnread= () =>{
        Unread ? changeUnread(false):changeUnread(true);
        console.log(Unread);
    };
    const toggleAll= () =>{
        All ? changeAll(false):changeAll(true);
        console.log(Unread);
    }

  return (
    <div className="h-screen w-[16rem] items-center">


        <div className="flex flex-col pt-6 items-center">
            <div className="relative flex items-center">
                <input type="text" className="bg-[#16171b] pl-9 px-0 placeholder:text-gray-500 p-4 rounded-[1rem]" placeholder='Search'/>
                <IoIosSearch className="absolute text-[19px] text-gray-500 ml-3" />
            </div>
        </div>
        
        <div className="flex flex-col ml-4 mt-7">
            <div className="flex items-center justify-between text-[15px] text-gray-500">
             <p className="">Unread</p>
            <div className="hover:bg-[#16171b] rounded-full mr-3"  onClick={toggleUnread}>
                    {
                    Unread ? <MdOutlineKeyboardArrowUp className="insert-y-0 right-0"/> : <MdOutlineKeyboardArrowDown className="insert-y-0 right-0"/>
                    }
            </div>
        
            </div>
            {

        Unread &&
        (   
            <div className="translate-y-0 mt-3 ease-in-out delay-150 duration-200"> 
            <MessageBar name = {"Kirtan Kunwar"} content = {"Chak is gu"} />
            <MessageBar name = {"Hane"} content = {"I only know what i know"} />
            </div>
        )
        }
        </div>

        <div className="flex items-center ml-4 mt-7 justify-between text-[15px] text-gray-500">
            <p className="">All Messages</p>
            <div className="hover:bg-[#16171b] rounded-full mr-3"  onClick={toggleAll}>
            {
                    All ? <MdOutlineKeyboardArrowUp className="insert-y-0 right-0"/> : <MdOutlineKeyboardArrowDown className="insert-y-0 right-0"/>
            }
            </div>
        
            
        </div>
        
        

        </div>
    
  )
}

export default ContactList