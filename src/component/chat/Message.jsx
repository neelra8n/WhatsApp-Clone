import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { useContext } from "react";
import { AccountContext } from '../../context/AccountProvider'

const useStyles = makeStyles({
    wrapper: {
        background: '#fff',
        padding: 5,
        maxWidth: '60%',
        display: 'flex',
        borderRadius: 10,
        width: 'fit-content',
        wordBreak: 'break-word'
    },
    time: {
        fontSize: 10,
        marginTop: 6,
        color: '#919191',
        wordBreak: 'keep-all'
    },
    text: {
        fontSize: 14,
        padding: '0 25px 0 5px'
    },
    own: {
        background: '#dcf8c6',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word',
        marginLeft: 'auto'
    }
})

const Message = ({message}) => {
    const classes = useStyles();
    const {account} = useContext(AccountContext);

    const formatDate = (date) =>{
        return date < 10 ? '0'+date:date;
    }
    return (
        <Box className={account.googleId === message.sender? classes.own:classes.wrapper }>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    )
}

export default Message;