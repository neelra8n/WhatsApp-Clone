import { Box, makeStyles , InputBase} from "@material-ui/core";

import { AttachFile, Mic, EmojiEmotionsOutlined } from "@mui/icons-material";


const useStyles = makeStyles(theme => ({ 
    footer: {
        display: 'flex',
        alignItems: 'center',
        height: '70px',
        background: '#ededed',
        width: '100%',
        padding: '0 15px',
        '& > *': {
            margin: 5,
            color: '#91919'
        },
    },
    clipItem: {
        transform: 'rotate(40deg)'
    },
    inputRoot: {
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 25,
        fontSize: 14,
        height: 20,
        width: '100%'
    },
    search: {
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        width: 'calc(94% - 100px)'
    }
}));

const Footer = ({sendText, setValue, value}) => {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <EmojiEmotionsOutlined />
            <AttachFile className={classes.clipItem} />
            <Box className={classes.search}>
                <InputBase 
                    placeholder="Type a message"
                    classes={
                        {
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }
                    }
                    inputProps={{'aria-label': 'search'}}
                    onKeyPress={(e)=> sendText(e)}
                    onChange={(e)=>setValue(e.target.value)}
                    value={value}
                />
            </Box>
            <Mic />
        </Box>
    )
}

export default Footer;
  