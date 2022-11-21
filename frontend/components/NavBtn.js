import React from 'react'

const NavBtn = ({title,icon}) => {

    return (
    <div className="flex cursor-pointer items-center">

        <div className="text-white">{icon}</div>
        <div className="flex">{title}</div>
    
        

    </div>
  );
};

export default NavBtn