import React from 'react'

function SidebarBtn({title,icon}) {
  return (
    <div className="flex space-x-5 items-center cursor-pointer ">
        
        <div className="">
            {icon}
        </div>
        <div className="">
            {title}
        </div>
        


    </div>
  )
}

export default SidebarBtn