import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";

import {AccountContext} from '../../context/AccountProvider';
import { getConversation, setConversation } from "../../service/api.js";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles({
    component: {
        display: 'flex',
        padding: '10px 15px',
        cursor: 'pointer', 
        overflow: 'overlay'
    },
    imageContainer: {
        borderRadius: '50%',
        height: 50,
        width: 50,
        padding: '0, 12px'
    },
    textContainer: {
        padding: '5px 15px'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        color: '#00000099',
        marginRight: 20,
        marginTop: 8
    },
    text: {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 13,
        marginLeft: 15
    }
});

const Conversation = ({user}) => {
    const classes = useStyles();
    
    const {account, newMessageFlag} = useContext(AccountContext);
    const {setPerson} = useContext(UserContext);

    const [message, setMessage] = useState({});

    useEffect(()=>{
        const getConversationMessage = async ()=>{
            const data = await getConversation({sender: account.googleId, receiver: user.googleId})
            setMessage({text: data.message, timestamp: data.updatedAt});
        }
        getConversationMessage();
    }, [newMessageFlag]);


    const url = user.imageUrl;
    
    const getUser = async () =>{
        setPerson(user);
         await setConversation(
            {
                senderId: account.googleId,
                receiverId: user.googleId
            });
    }

    const getTime = (time) => {
        return time < 10 ? '0' + time : time; 
    } 

    return (
        <Box className={classes.component} onClick={()=>getUser()}>
            <Box>
                <img src={url} alt="display-pic" className={classes.imageContainer}/>
            </Box>
            <Box style={{width: '100%'}}>
                <Box style={{display: 'flex'}}>
                    <Typography className={classes.textContainer}>{user.name}</Typography>
                    { 
                        message.text && 
                        <Typography className={classes.timestamp}>
                            {getTime(new Date(message.timestamp).getHours())}:{getTime(new Date(message.timestamp).getMinutes())}
                        </Typography>        
                    }
                </Box>
                <Box className={classes.text}>
                    <Typography>{message.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation; 