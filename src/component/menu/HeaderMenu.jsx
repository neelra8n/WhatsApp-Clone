import { useContext, useState } from "react";
import { MoreVert } from "@mui/icons-material";
import {Menu, MenuItem} from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { makeStyles } from "@material-ui/core";
import Drawer from '../drawer/InfoDrawer';

import ClientId from "../key/ClientId";
import { AccountContext } from "../../context/AccountProvider";

const useStyle = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 50px 5px 24px',
        color: '#4a4a4a',
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
});
 
const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const {setAccount} = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const toggleDrawer = () => {
        setOpenDrawer(true);
    };
    
    const onLogoutSuccess = () => {
        alert("you have been logged out");
        console.clear();
        setAccount('');
    }
    const classes = useStyle();

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                
            >
                <MenuItem onClick={()=>{handleClose(); toggleDrawer()}} className= {classes.menuItem}>Profile</MenuItem>
                <MenuItem onClick={handleClose} className= {classes.menuItem}>
                    <GoogleLogout
                         clientId= {ClientId}
                         buttonText='Logout'
                         onLogoutSuccess={onLogoutSuccess}
                         className={classes.logout}
                    >

                    </GoogleLogout>
                </MenuItem>
             </Menu>
             <Drawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default HeaderMenu;