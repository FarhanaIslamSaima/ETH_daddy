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
  const [provider,setProvider]=useState(null)
  const [ethDaddy,setEthdaddy]=useState(null)
  const[domains,setDomains]=useState([])
  const loadBlockChainData=async()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network =await provider.getNetwork();
  

    const ethDaddy=new ethers.Contract(config[network.chainId].ETHDaddy.address,ETHDaddy,provider);
    
    setEthdaddy(ethDaddy)
  
    const maxSupply=await ethDaddy.maxSupply();
console.log('hi')
const domains=[];
    console.log(maxSupply.toString());
    for(var i=0;i<=maxSupply;i++){
      const domain=await ethDaddy.getDomain(i);
      domains.push(domain)
      setDomains(domains);
    }
    console.log(domains);

    window.ethereum.on('Changed account',async()=>{
      const accounts=await window.ethereum.request({'method':'eth_requestAccounts'});
      const account= ethers.utils.getAddress(accounts[0]);
      setAccount(account)
      console.log(account);


    })

  }
  
  useEffect(()=>{
    loadBlockChainData()

  },[])
  

  return (
    <div>
      <Navigation account={account} setAccount={setAccount}/>

     <Search/>
     <Box className={Classes.container}>
      <Typography className={Classes.header} variant={'h4'}>Why you need a domain name</Typography>
     <Typography>Own your custom username,use it accross services,and be able to store an avatar and other profile data</Typography>
     </Box>
     <hr/>
     {domains.map((domain,index)=>(
      <Domain domain={domain} ethDaddy={ethDaddy} provider={provider} id={index+1}></Domain>
     ))}

    </div>
  );
}

export default App;