import logo from './apelaser.png';
import './App.css';

// Web3 Wallet Connect Shit
import Web3 from 'web3';
// import { BlockHeader, Block } from 'web3-eth' // ex. package types


// New SDK from NPM 
import frame from 'conductive-sdk'
frame.init(
  'KX-0gToTv6GUh915KSa2iqBGTFix3i7n1fBLVA7JUNA',
  {api_host:'https://analytics.conductive.ai'}
)

// // Local Test
// import frame from 'conductive-sdk'
// frame.init(
//   'A0vW73DK3wmoqlp8hexfI_JC56PDc_S7g5k6pIsqExM',
//   {api_host:'http://localhost:8000'}
// )



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
          New NPM Install New SDK 1.0.7!!
          <br/>
              Should work now!
        </p>
    
        <ul> 
          <li><a href="https://ape.to/4sty6">NPM Prod Campaign link </a></li>
          <li><a href="https://discord.ape.to/J3BPT9KsRJ">NPM Prod Discord Join </a></li>
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
