import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Search from './components/Search'
import Domain from './components/Domain'

// ABIs
import ETHDaddy from './abis/ETHDaddy.json'

// Config
import config from './config.json';
import { use } from 'chai'

function App() {
  const [account,setAccount]=useState(null);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount}/>

     <Search/>

    </div>
  );
}

export default App;