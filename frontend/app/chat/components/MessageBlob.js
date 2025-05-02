import React from 'react'
import Cookies from 'js-cookie'

function MessageBlob({ message, sender }) {
  const user = Cookies.get("username")

  const isUser = sender === user

  return (
    <div className="w-full">
      {isUser ? (
        <div className="pr-6 flex w-full pt-4 flex-col items-end">
          <div className="bg-[#B785F6] text-white p-3 max-w-lg rounded-t-2xl rounded-bl-2xl break-words shadow-md">
            {message}
          </div>
        </div>
      ) : (
        <div className="pl-6 flex pt-4 flex-col items-start">
          <div className="bg-[#000000] text-white p-3 max-w-lg rounded-b-2xl rounded-tr-2xl break-words shadow-md">
            {message}
          </div>
        </div>
      )}
    </div>
  )
}

export default MessageBlob
