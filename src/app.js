import React from 'react';
import './App.scss';
import methImage from './meth.png';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="brand">METHOD-X</div>
        <button 
          className="buy-now" 
          onClick={() => window.location.href='https://basescan.org/token/0xc92b956c9bcbccbb3043eb2c3b0fb66105026f47#readContract'}>
          BUY NOW
        </button>
      </div>
      <div className="main-content">
        <img src={methImage} alt="Method-X" className="main-image" />
        <div className="floating-box-container">
          <div className="floating-box left-box">
            <ul>
              <li>Rewards METH holders with BRETT on every Buy and Sell!</li>
              <li>Directly feeds liquidity in to BRETT to benefit you and the ecosystem!</li>
            </ul>
          </div>
          <div className="floating-box right-box">
            <ul>
              <li>Based Dev</li>
              <li>LP Burned</li>
              <li>420,000,000,000 tokens ever to be minted</li>
              <li>No Presale</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="https://t.me/MethodXHouse" target="_blank" rel="noopener noreferrer">Join our Telegram</a>
      </div>
    </div>
  );
}

export default App;
