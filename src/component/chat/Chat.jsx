import { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useContext } from "react";

import { UserContext } from "../../context/UserProvider";
import { getConversation } from "../../service/api";
import {AccountContext} from '../../context/AccountProvider';

import ChatHeader from './ChatHeader';
import Message from './Messages';
// import Footer from './Footer';

// const useStyle = makeStyles({

// })

const Chat = () => {
    const {person} = useContext(UserContext);
    const { account } = useContext(AccountContext);
    const [conversation, setConversation] = useState({});

    // const classes = useStyle();
    useEffect(()=>{
       const getConversationDetails = async () => {
            let data = await getConversation({sender : account.googleId, receiver: person.googleId})
            setConversation(data); 
        }
        getConversationDetails();
    },[person.googleId])

    return (
        <Box>
            <ChatHeader />
            <Message conversation ={conversation} person={person} />
        </Box>
    )
}

export default Chat;