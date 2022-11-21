import React from 'react'
import Chat from './Chat'
import ContactList from './ContactList'

function MainBody() {
  return (
    
    <div className="flex bg-[#20232b] rounded h-full w-full">
      
        <div className="">
        <ContactList />
        </div>

        <div className="h-full w-[40rem] items-center">
          <Chat />
        </div>

    </div>
 )
}

export default MainBody