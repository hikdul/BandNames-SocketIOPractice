import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext()

export const  SocketProvider = ({children})=> {

    const SOCKET = useSocket('http://localhost:5000')

 return(
    <SocketContext.Provider value={{...SOCKET}}>
        {children}
    </SocketContext.Provider>
 )   
}

