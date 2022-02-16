import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api.js";
import { Box } from "@material-ui/core";

//component
import Conversation from './Conversation';
import { AccountContext } from "../../context/AccountProvider.jsx";



const Conversations = ({text}) => {
    const {account, socket, setActiveUsers} = useContext(AccountContext);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getUsers();
            const filterData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    },[text]);

    useEffect(()=> {
        socket.current.emit('addUser', account.googleId);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    },[account]);
    return (
        <Box>
            {
                users.map(user => (
                    user.googleId !== account.googleId &&
                    <Conversation user={user}/>
                )) 
            }
        </Box>
    )
}

export default Conversations;