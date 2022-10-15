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
const web3 = new Web3('ws://localhost:3001');
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
        <p id="WUTANGTEST">
          Can you see me now
        </p>

      <a className="conductive-link" href="https://app.conductive.ai" target="_blank">Look at conductive</a>
      <a className="conductive-link" href="https://lulznft.com" target="_blank">Lulz NFT</a>
    <br/>   
      <a href="https://qa.ape.to/y5v5y">Campaign link </a>
    <br/>
      <a href="https://qa-discord.ape.to/PXyjsSEg8k">Discord Join </a>
      <br/>

      <input type="button" value="Connect Wallet" onClick={connect}/>
 
      </header>
    </div>
  );
}

export default App;
