import { Drawer, Box, Typography, makeStyles } from '@material-ui/core';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';


const useStyles = makeStyles({
    header: {
        backgroundColor: '#00bfaf',
        height: 93,
        color: '#fff',
        display: 'flex',
        '& > *' : {
            marginTop: 'auto',
            padding: 15,
            fontWeight: 600,
        }
    },
    component: {
        backgroundColor: '#ededed',
        height: '90%'
    }
});

const InfoDrawer = ({open, setOpen}) =>{
    
    const handleClose = () => {
        setOpen(false);
    }
    const classes = useStyles();

    return (
            <Drawer open = {open} onClose={handleClose} >
                <Box className={classes.header}>
                    <ArrowBack onClick={handleClose}/>
                    <Typography>Profile</Typography>
                </Box>
                <Box className = {classes.component}>
                    <Profile />    
                </Box>
            </Drawer>
    )
}

export default InfoDrawer;