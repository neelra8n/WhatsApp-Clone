import { useContext} from "react";

import { Box, Typography, makeStyles } from "@material-ui/core";
import { Search, MoreVert } from "@mui/icons-material";
import { UserContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";


const useStyles = makeStyles({
    header: {
        display: 'flex',
        height: 35,
        background: '#ededed',
        padding: '16px 15px',
        alignItems: 'center'
    },
    imageContainer: {
        height: 37,
        width: 37,
        borderRadius: '50%',
        padding: '0 5px'
    },
    status: {
        fontSize: 12,
        marginLeft: 15
    },
    name: {
        marginLeft: 15,
        color: 'rgb(0, 0, 0, 0.6)'
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 27,
            color: '#919191'
        }
    }
})

const ChatHeader = () => {
    const classes = useStyles();
    const {person} = useContext(UserContext);
    const {activeUsers} = useContext(AccountContext);

    return (
        <Box className={classes.header}>
            <img src={person.imageUrl} alt='dp' className={classes.imageContainer}/>
            <Box> 
                <Typography className={classes.name}>{person.name}</Typography>
                <Typography className= {classes.status}>{
                activeUsers?.find(user => user.userId === person.googleId)? "online" : "offline"}</Typography>
            </Box>
            <Box className={classes.rightContainer}>
                <Search />
                <MoreVert />
            </Box>
        </Box>
    )
}

export default ChatHeader;