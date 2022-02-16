import { useContext } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    displayPictue: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '20px 0'
    },
    nameContainer: {
        background: '#fff',
        padding: '15px 30px 8px',
        boxShadow: '0 1px 1px rgb(0,0,0,0.08)',
        '& :first-child': {
            fontSize: 15,
            color: '#009688'
        },
        '& :last-child': {
            color: '#4a4a4a',
            margin: '1px 0'
        }
    },  
    discription: {
        padding: '10px 20px 30px 28px',
        '& > *': {
            fontSize: 12,
            color: 'rgba(0,0,0,0.45)'
        }
    }
});

const Profile = () => {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} alt='dp' className={classes.displayPictue} />
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.discription}>
                <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! code! Repeat!</Typography>
            </Box>
        </>
    )
}

export default Profile;