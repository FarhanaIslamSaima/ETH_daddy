import { ethers } from 'ethers';
import logo from '../assets/logo.svg';
import {AppBar,Toolbar,makeStyles,Box,Typography,Button} from '@material-ui/core'
const useStyle=makeStyles({
  header:{
    background:'lightgrey'

  },
  container:{
    display:'flex',
    alignItems:'center',
    width:'100%'
  },
  leftContainer:{
    width:'80%',
    display:'flex',
    color:'black'
  },
  rightContainer:{
    width:'20%',
    marginLeft:'auto'


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


  },
  button:{
    background:'black',
    
    fontSize:'13px'
  }
})

const Navigation = ({ account, setAccount }) => {
  const classes=useStyle()
  const handleConnect=async()=>{
    const accounts=await window.ethereum.request({'method':'eth_requestAccounts'})
    const account=await ethers.utils.getAddress(accounts[0]);
    console.log(account)
    setAccount(account)

  }
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
          <Box className={classes.rightContainer}>
            {
              account? <Button  className={classes.button}variant={'contained'} color={'primary'}>{account.slice(0,6)+'....'+account.slice(38,42)}</Button>:
              <Button  className={classes.button} variant={'contained'} color={'primary'} onClick={handleConnect}>Connect</Button>
            }
          
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;