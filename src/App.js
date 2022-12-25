import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Search from './components/Search'
import Domain from './components/Domain'

// ABIs
import ETHDaddy from './abis/ETHDaddy.json'
import {Box,makeStyles,Typography} from '@material-ui/core'
// Config
import config from './config.json';
import { use } from 'chai'
const useStyle=makeStyles({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:'20px',
    padding:'10px'
  },
  header:{
    fontWeight:'bold'
  }

})

function App() {
  const Classes=useStyle()
  const [account,setAccount]=useState(null);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount}/>

     <Search/>
     <Box className={Classes.container}>
      <Typography className={Classes.header} variant={'h4'}>Why you need a domain name</Typography>
     <Typography>Own your custom username,use it accross services,and be able to store an avatar and other profile data</Typography>
     </Box>
     <hr/>

    </div>
  );
}

export default App;