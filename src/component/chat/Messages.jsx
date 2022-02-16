import { Box, makeStyles } from "@material-ui/core";
import { useState, useContext, useEffect, useRef } from "react";
import Footer from "./Footer";
import Message from "./Message";
import { AccountContext } from "../../context/AccountProvider";
import {newMessage, getMessage} from "../../service/api"

const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png' })`,
        backgroundSize: '60%'
    },
    component: {
        height: '81vh',
        overflow: 'scroll'

    },
    container: {
        padding: '1px 80px'
    }
})

const Messages = ({person, conversation}) => {
    const classes = useStyles();
    const [value, setValue] = useState();
    const {account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);



    const scrollRef = useRef();

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({transition: 'smooth'})
    })

    useEffect(() => {
        const getMessageDetails = async() => {
           let response = await getMessage(conversation._id);
           setMessages(response.data);  
          }
          getMessageDetails();
    },[conversation?._id, person._id, newMessageFlag])

    useEffect(()=>{
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                sender: data.senderId,
                text : data.text,
                createdAt: Date.now()
            })
        })
    },[])

    const receiverId = conversation?.members?.find(member => member !== account.googleId);

    const sendText = async(e) => {
        let code = e.keyCode || e.which
        
        if(value===null) return;
        
        if(code === 13) {
            let message = {
                sender: account.googleId,
                conversationId : conversation._id,
                text: value
            }

            await newMessage(message);
            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) && setMessages(prev => [...prev, incomingMessage]);
    },[incomingMessage, conversation])

    socket.current.emit('sendMessage', {
        senderId : account.googleId,
        receiverId, 
        text: value
    })
    return (
        <Box className={classes.wrapper}>
            <Box className = {classes.component}>
                {
                    messages && messages.map(message => (
                        <Box className={classes.container} ref={scrollRef}>
                            <Message message={message}/>
                        </Box>
                    ))
                }
            </Box>
            <Footer sendText={sendText} setValue={setValue} value={value}/>
        </Box>
    )
}

export default Messages;