import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <h2>🔥 Your Favorite Pizzas, Just a Tap Away! 🍕</h2>
      <p>Order effortlessly with our app & enjoy exclusive deals!</p>
      <div className="app-platform">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
}

export default AppDownload;
