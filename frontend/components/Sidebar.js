import React from 'react'
import {TbMessages} from 'react-icons/tb';
import SidebarBtn from './SidebarBtn';

function Sidebar() {

    const sidebarButtons = [
        {
        title:"All",icon: <TbMessages />
            
        },
        {
            title:"All",icon: <TbMessages />
                
        },
        
        {
            title:"All",icon: <TbMessages />
                    
        },
    ]

  return (
    <div className="bg-black w-[16rem] h-screen">

        <div className="flex flex-col items-center pt-5">
            {
                sidebarButtons.map((btn)=>(
                    <div className="pl-4 flex items-center w-[10rem] h-[4rem] text-gray-400 text-base hover:bg-yellow-200 rounded-md hover:text-black">
                    <SidebarBtn title = {btn.title} icon = {btn.icon} />
                    </div>
                    ))
            }
        
        </div>
    </div>
  )
}

export default Sidebar