import React, { useState } from 'react';
import logo from '../assets/logo.png';
import profile from '../assets/photo.png';
import Image from 'next/image';
import NavBtn from './NavBtn';
import {AiOutlineFile} from 'react-icons/ai';
import {HiChatBubbleBottomCenterText} from 'react-icons/hi2';
import {IoStatsChartOutline} from 'react-icons/io5';
import {IoSettingsOutline}  from 'react-icons/io5';
import {TiContacts} from 'react-icons/ti';
import {BsMoon,BsSun, BsToggle2On} from 'react-icons/bs';
import {IoCallOutline} from 'react-icons/io5';
import {CgNotifications} from 'react-icons/cg';


const Navbar = () => {
    const navbtns =[
      {
        title:"Resume",icon : <AiOutlineFile />
      },
      {
        title:"Contacts",icon : <TiContacts />
      },
      
      {
        title:"Chat",icon : <IoStatsChartOutline />
      },
      {
        title:"Statistics",icon : <HiChatBubbleBottomCenterText />
      },
      {
        title:"Settings",icon : <IoSettingsOutline />
      }
    ];
    const [isOpen,setIsOpen] = useState(false);

    return (

    <div className="bg-[#20232b] h-20 flex items-center justify-between px-6">
      
        {/*left*/}
        <div className="flex items-center text-white h-full">
          <div className="flex items-center" >
            <div className="mr-2 w-20 h-13 ">
              <Image src={logo} className= "" />
              </div>
              <p className="text-white font-bold">ChatApp</p>
              
          </div>
        
        <div className="space-x-8 hidden sm:flex pl-10 text-gray-400">
          {
            navbtns.map((button)=>

                (
                  <NavBtn title={button.title} icon={button.icon}/>
                )

            )


          }
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-6 text-white">
          <div className="cursor-pointer hidden sm:flex" onClick={()=>setIsOpen(!isOpen)}>

            {isOpen ? <div className="text-purple-700 relative flex items-center">
              
              <BsToggle2On className="h-12 w-12" />
              <BsMoon className="absolute text-white right-[.3rem]" />
          </div>
          :
          <div className="text-purple-700 relative flex items-center">
                <BsToggle2On className="h-12 w-12 rotate-180" />
                <BsSun className="absolute text-white left-[.45rem]" />          
            </div>
          }
          </div>
            <IoCallOutline className="w-6 h-6 hidden sm:flex" />

            <div className="relative mr-4">
              <CgNotifications className="w-8 h-6 hidden sm:flex" />
              <div className="bg-white h-[0.4rem] w-[0.4rem] rounded-full absolute top-0 right-0">

              </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-end pr-8 pl-3">
                  <p>Good Evening Jhon</p>
                  <p className="text-[14px]">+977 9812313123</p>
                </div>
              <div className="flex pl">
                <Image src={profile} className="rounded-full w-[3rem] h-[3rem] object-cover" />

              </div>
              


            </div>
                
            
            
          </div>
    </div>
  )
}

export default Navbar