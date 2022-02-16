import { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from "@mui/icons-material";

import { AccountContext } from "../../context/AccountProvider";

import HeaderMenu from "./HeaderMenu";
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({
    header: {
        height: '35px',
        background: '#ededed',
        padding: '16px 16px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'
    },
    icon: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: 2,
            padding: 8,
            color: '#919191',
        },
        '& :first-child': {
            fontSize: 22,
            marginRight: 8,
            marginTop: 3
        }
    }
})

const Header = () => {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    const [open, setOpen] = useState(false);
    const toggleDrawer = () =>{
        setOpen(true);
    }
    // console.log(account);
    return (
        <>
        <Box className={classes.header}>
            <img src={account.imageUrl} alt="displsy-pic" className={classes.avatar} onClick={toggleDrawer} />
            <Box className={classes.icon}>
                <Chat />
                <HeaderMenu />
            </Box>
        </Box>
        <Drawer open={open} setOpen={setOpen} /> 
        </>
    )
}

export default Header;