import logo from './apelaser.png';
import './App.css';

// Web3 Wallet Connect Shit
import Web3 from 'web3';
// import { BlockHeader, Block } from 'web3-eth' // ex. package types


// New SDK from NPM - LulzNFT -> Prod
import frame from 'conductive-sdk'
frame.init(
  'W08fDAFH3vBvxzn8LSfc7O8_7S9XtnZTyq0KTRnE6TQ',
  {api_host:'https://analytics.conductive.ai'}
)

// New SDK from NPM -> QA site campaigns
// frame.init(
//   'L9HJRU96BSSyC2xTP7vsf6shwjTEIzNuB4uBr8aXXBY',
//   {api_host:'https://analytics.qa-conductive.ai'}
// )

// Wallet connect function
// const web3 = new Web3('ws://localhost:3001');
const web3 = new Web3('wss://ericlsung.com/AstroChimp');
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
          Testing NPM install of SDK 
          <br/>Pointed to QA analytics. 
          <br/>SDK-test project.
        </p>
    
        <h2>QA Test</h2>
        <ul> 
          <li><a href="https://qa.ape.to/m7dsz">QA Campaign link </a></li>
          <li><a href="https://qa-discord.ape.to/PXyjsSEg8k">QA Discord Join </a></li>
        </ul>
        
        <h2>Prod Test</h2>
        <ul> 
          <li><a href="https://ape.to/jxtz9">Prod Campaign link </a></li>
          <li><a href="https://discord.ape.to/3P9GyM2kzR">Prod Discord Join </a></li>
        </ul>

        

      {/* <input className="wconnect" type="button" value="Connect Wallet" onClick={connect}/> */}
 

      <div class="wrapper">
        <a class="cta" href="#" onClick={connect}>
          <span>Connect Wallet</span>
        </a>
      </div>



      </header>
    </div>
  );
}

export default App;
