import { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';

import { AccountContext } from '../../context/AccountProvider';

import { Dialog,withStyles,Box,Typography, makeStyles, List, ListItem } from "@material-ui/core";
import ClientId from '../key/ClientId';
import { addUser } from '../../service/api';


// Style

const styles = {
    dialogPaper : {
        height : '95%',
        width : '50%',
        marginTop : '12%',
        boxShadow : 'none',
        borderRadius : '0',
        maxHeight : '100%',
        maxWidth : '100%',
        overflow : 'hidden'

    }
}

const useStyles = makeStyles ({
    component : {
        display : 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    leftComponent : {
        padding : '56px 0 56px 56px',
    },
    qrCode : {
        height : '264',
        width : '264',
        margin : '56px 0 0 56px',
        // padding: '0 0 0 30px'
    },
    title : {
        fontSize : 26,
        marginBottom : 25,
        color : '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight : 500,
    },
    list : {
        '& > *' : {
            fontSize : 18,
            padding : 0,
            marginTop: 15,
            lineHeight : '28px',
            color : '#4a4a4a'
        }
    }
})


const Login = ({classes}) => {
    const className = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = ClientId;
    
    const {account, setAccount} = useContext(AccountContext);
   
    const onLoginSuccess = async(res) => {
        // console.log('Login Succeful', res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj);
        // console.log(res.profileObj);
    }
    const onLoginFailure = response => {
        console.log('Login is Failed');
    }

    return (
        <Dialog 
            open = {true}
            classes={{paper : classes.dialogPaper}}
            BackdropProps={{style : {backgroundColor : 'unset'}}}
        >
            <Box className={className.component}>
                <Box className={className.leftComponent}>
                    <Typography className={className.title}>To use WhatsApp on Your Computer:</Typography>
                    <List className={className.list}>
                        <ListItem>1. Open WhatsApp on Your Phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position: "relative"}}>
                    <img src= {qrurl} alt="qrurl" className={className.qrCode}/>
                   <Box style={{position: 'absolute', left: "50%", top: "50%"}}>
                    <GoogleLogin 
                            clientId={clientId}
                            buttonText=''
                            isSignedIn= {true}
                            onSuccess={onLoginSuccess}
                            onFailure = {onLoginFailure}
                            cookiePolicy= {'single_host_origin'}
                        />
                   </Box>
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(styles)(Login);