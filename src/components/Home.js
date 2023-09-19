import React from 'react';
import Navbar from './Navbar.js';
import Foot from './Footer/Foot.js';
import './Footer/foot2.css';

const Home = () => {
  return (
    <div>
    <div className="home-container">
      <img className="spark-image" src={process.env.PUBLIC_URL + '/pic/vector.svg'} alt="spark" />
      <Navbar />
      <div className="cube">
        <img src={process.env.PUBLIC_URL + '/pic/cube.svg'} alt="Top Left" />
      </div>
      <div className="stair">
        <img src={process.env.PUBLIC_URL + '/pic/stair.svg'} alt="Top Left" />
      </div>
      <div className="centered-content">
       <div className="cashapp">
        <h1 className="cash">Cash</h1>
        <h1 className="app">App</h1>
      </div>
      
        <img src={process.env.PUBLIC_URL + '/pic/intro-phone1.svg'} alt="phone" className="phone-image" />
      </div>
      <div className="cubes">
        <img src={process.env.PUBLIC_URL + '/pic/cubes.svg'} alt="Bottom Left" />
      </div>
      <div className="pillar">
        <img src={process.env.PUBLIC_URL + '/pic/pillar.svg'} alt="Bottom Right" />
      </div>
    </div>
    <div className="home-footer"><Foot/></div> 
     </div> 
  );
};

export default Home;


