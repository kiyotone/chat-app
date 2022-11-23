import React, { useContext, useReducer } from 'react'

export const MessageContext = React.createContext();

export function useMessages(){
  return useContext(MessageContext)
}

const ACTIONS = {
    ADD : "add"
}

export const messageReducer =(state,action)=>{
      switch (action.type){
        case ACTIONS.ADD:
          return {
            messages : [...state.messages,action.payload]
          } 

          default :
          return state
      }
}

export function MessageProvider({children}) {

    const [state,dispatch] = useReducer(messageReducer,
      {messages:[{
        content: "i am a great person",
        sender : "Hane"
    },
    {
      content: "Almost Complete",
      sender : "ChatPerson"
    }
    ]
      });

  return (
    <MessageContext.Provider value={{...state,dispatch}}>
                  
            
            {children}

        
    </MessageContext.Provider>
  )
}
