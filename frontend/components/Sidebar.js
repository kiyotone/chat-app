import React from 'react'
import {TbMessages} from 'react-icons/tb';
import SidebarBtn from './SidebarBtn';
import {BiMessageSquareCheck} from 'react-icons/bi';
import {BiBlock} from 'react-icons/bi';
import {RiSpam2Line} from 'react-icons/ri'


function Sidebar() {

    const sidebarButtons = [
        {
        title:"Pinned",icon: <BiMessageSquareCheck />
            
        },
        {
            title:"All",icon: <TbMessages />
                
        },
        
        {
            title:"Blocked",icon: <BiBlock />
                    
        },
        {
            title:"Spam",icon:<RiSpam2Line />
        },
        
    ]

  return (
    <div className="bg-black w-[18rem] h-screen">

        <div className="flex flex-col items-center pt-5">
            {
                sidebarButtons.map((btn)=>(
                    <div className="pl-4 flex items-center w-[12rem] h-[4rem] text-gray-400 text-base hover:bg-yellow-200 cursor-pointer rounded-3xl hover:text-black" key={btn.name+"d1"}>
                    <SidebarBtn title = {btn.title} icon = {btn.icon} />
                    </div>
                    ))
            }
        
        </div>
    </div>
  )
}

export default Sidebar