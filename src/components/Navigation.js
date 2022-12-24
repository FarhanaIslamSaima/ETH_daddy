import { ethers } from 'ethers';
import logo from '../assets/logo.svg';
import {AppBar,Toolbar,makeStyles,Box,Typography} from '@material-ui/core'
const useStyle=makeStyles({
  header:{
    background:'lightgrey'

  },
  container:{
    display:'flex'
  },
  leftContainer:{
    display:'flex',
    color:'black'
  },
  rightContainer:{


  },
  list:{
    display:'flex',
    flexDirection:'row',
    '&>*':{
      padding:'0px 10px'
    }

  },
  logo:{
    fontWeight:'bold',
    marginRight:'10px'


  }
})

const Navigation = ({ account, setAccount }) => {
  const classes=useStyle()
  return (
    <AppBar>
      <Toolbar className={classes.header} >
        <Box className={classes.container}>
          <Box className={classes.leftContainer}>
            <Typography className={classes.logo}>ETH Daddy</Typography>
            <Box className={classes.list}>
              <Typography>Domain Names</Typography>
              <Typography>Website & Hosting</Typography>
              <Typography>Commerce</Typography>
              <Typography>Email & Marketing</Typography>
            </Box>
          </Box>
          <Box className={classes.rightContainer}></Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;