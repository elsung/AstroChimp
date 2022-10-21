import logo from './apelaser.png';
import './App.css';

// Web3 Wallet Connect Shit
import Web3 from 'web3';
// import { BlockHeader, Block } from 'web3-eth' // ex. package types


// New SDK from NPM 
import frame from 'conductive-sdk'
frame.init(
  'wLG3ZsMppCnPKR-kStQ7FIW6_f6XHDOWrOrlaP-SNEc',
  {api_host:'https://analytics.qa-conductive.ai'}
)

// Wallet connect function

var options = {
  reconnect: {
      auto: true,
      delay: 5000, // ms
      maxAttempts: 5,
      onTimeout: false
  },
  keepalive:true
};

const web3 = new Web3('wss://ericlsung.com/AstroChimp', options);
async function connect() {
  if (window.ethereum) {
     await window.ethereum.request({ method: "eth_requestAccounts" });
     window.web3 = new Web3(window.ethereum);
     const account = web3.eth.accounts;
     //Get the current MetaMask selected/active wallet
     const walletAddress = account.givenProvider.selectedAddress;
     console.log(`Wallet: ${walletAddress}`);
  
  } else {
   console.log("No wallet");
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="NFT" src={logo} className="App-logo" alt="logo" />
        
        <p id="goham">
          {/* Testing NPM install of SDK 
          <br/>Pointed to QA analytics. 
          <br/>SDK-test project. */}
          New SDK Install - Ver 1.0.7
          <br/>
        </p>
    
        <ul> 
          <li><a href="https://qa-discord.ape.to/CmZtdbat4K">NPM Prod Discord Join </a></li>
        </ul>

        

      {/* <input className="wconnect" type="button" value="Connect Wallet" onClick={connect}/> */}
 

      <div className="wrapper">
        <a className="cta" href="#" onClick={connect}>
          <span>Connect Wallet</span>
        </a>
      </div>



      </header>
    </div>
  );
}

export default App;
