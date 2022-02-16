import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const socket = useRef();

    useEffect(()=>{
        // socket.current = io('http://localhost:9000');
        socket.current = io('https://whatsapp-clone-socket-neel.herokuapp.com');
        //need to change this
    },[])


    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            socket, 
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}
         >
             
             {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;