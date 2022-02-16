import { Box, Dialog } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import { useContext } from "react";


import { UserContext } from "../context/UserProvider";
import Menu from "./menu/Menu";
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat"

const styles = {
    dialogPaper : {
        height : '95%',
        width : '75%',
        boxShadow : 'none',
        borderRadius : '0',
        maxHeight : '100%',
        maxWidth : '100%',
        overflow : 'hidden'
    }
}

const useStyles = makeStyles({
    component: {
        display: 'flex',
    },
    leftComponent : {
        minWidth : '380px',
    },
    rightComponent : {
        borderLeft: '3px solid rgba(0 0 0 0.14)',
        width: '70%',
        minWidth: 300,
        height: '100%'
    }
})



const ChatBox = ({classes}) => {
    const {person} = useContext(UserContext)
    const className = useStyles();
    return ( 
            <Dialog 
            open = {true}
            classes={{paper: classes.dialogPaper}}
            BackdropProps={{style : {backgroundColor : 'unset'}}}
            
            >
                <Box className={className.component}>
                    <Box className={className.leftComponent}>
                        <Menu />    
                    </Box>
                    <Box className={className.rightComponent}>
                        {
                            Object.keys(person).length ? <Chat /> : <EmptyChat />
                        }
                    </Box>
                </Box>
            </Dialog>
    ) 
}

export default withStyles(styles)(ChatBox);