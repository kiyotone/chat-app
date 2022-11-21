import React from 'react'
import hane from '../assets/hane.png';
import Image from 'next/image';

function MessageBar({name,content}) {
    
    return (
    <div className="flex pl-2 items-center h-[70px] hover:bg-[#16171b] cursor-pointer rounded-xl">
        <div className="flex pl">
            <Image src={hane} className="rounded-full w-[3rem] h-[3rem] object-cover" />

        </div>
        <div className= "pl-2 flex-col mt-0">        
            <div className="text-[18px]">
                {name}
            </div>
            <div className="text-[10px] text-gray-500">
                {content}
            </div>
            
        </div>
    </div>
  )
}

export default MessageBar