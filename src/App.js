import logo from './apelaser.png';
import './App.css';

// Web3 Wallet Connect Shit
import Web3 from 'web3';
// import { BlockHeader, Block } from 'web3-eth' // ex. package types


// Newest SDK from NPM - LulzNFT
import frame from 'conductive-sdk'
frame.init(
  'L9HJRU96BSSyC2xTP7vsf6shwjTEIzNuB4uBr8aXXBY',
  {api_host:'https://analytics.qa-conductive.ai'}
)

// Wallet connect function
// const web3 = new Web3('ws://localhost:3001');
const web3 = new Web3('ws://ericlsung.com/AstroChimp');
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
        
        <ul>
          <li><a className="conductive-link" href="https://app.qa-conductive.ai" target="_blank">QA Conductive.ai</a></li>
          <li><a className="conductive-link" href="https://qa.lulznft.com" target="_blank">QA LulzNFT</a></li>
        </ul>

        <p id="goham">
          Testing NPM install of SDK 
          <br/>Pointed to QA analytics. 
          <br/>SDK-test project.
        </p>
    
        <ul> 
          <li><a href="https://qa.ape.to/m7dsz">Campaign link </a></li>
          <li><a href="https://qa-discord.ape.to/PXyjsSEg8k">Discord Join </a></li>
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
