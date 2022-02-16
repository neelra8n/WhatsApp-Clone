import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import React, { useContext } from "react";
//component

import { AccountContext } from "../context/AccountProvider";

import ChatBox from "./ChatBox";
import Login from "./acoount/Login";

const useStyles = makeStyles ({
    loginHeader: {
        height : 250,
        background : '#00bfaf',
        boxShadow : 'node',
    },
    component : {
        background : '#dcdcdc',
        height : '100vh'
    },
    header: {
        height : 115,
        background : '#128c7e',
        boxShadow : 'node',
    },

})

const Messenger = () => {
    const classes = useStyles();
    const  {account}  = useContext(AccountContext);
    return (
        <Box className={classes.component}>
            <AppBar className = {account ? classes.header : classes.loginHeader}>
                <Toolbar>
                </Toolbar>
            </AppBar> 

            {account ?  <ChatBox /> : <Login /> }
        </Box>
    )
}

export default Messenger;