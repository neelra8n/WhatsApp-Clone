

import { Box, makeStyles, InputBase } from "@material-ui/core";
import { Search as SearchIcon } from "@mui/icons-material";

const useStyle = makeStyles({
    component: {
        background: '#f6f6f6',
        height: 43,
        display: 'flex',
        alignItems: 'center',
        transition: 'box-shadow .18s ease-out,background-color .25s ease-out'
    },
     SearchIconWrapper: {
        height: '100%',
        position: 'absolute',
        padding: '0 0 0 5',
        marginLeft: 10,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      SearchBar: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#ffffff',
        margin: '0 13px',
        width: '100%',
      },
      StyledInputBase: {
        color: 'inherit',
        '& .MuiInputBase-input': {
          width: '100%',
        },
      },
      inputRoot: {
        width: '100%'
      },
      inputInput: {
        paddingLeft: 65,
        fontSize: 14,
        height: 15,
        width: '100%'
    }
});


const Search = ({setText}) => {
    const classes = useStyle();
    return (
       <Box className={classes.component}>
            <Box className={classes.SearchBar}>
                <Box className={classes.SearchIconWrapper}>
                <SearchIcon fontSize="small" />
                </Box>
                <InputBase
                     classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=> setText(e.target.value)}
                />
          </Box>
       </Box>
        
    )
}

export default Search;