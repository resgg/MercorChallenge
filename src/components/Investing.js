import React from 'react'
import Foot from './Footer/Foot'
import  './Footer/foot.css';
const Investing = () => {
  return (
   <div className="investing-container">
      <div className="investing-green">
      <h1 className="investing-title">Investing</h1>
      <div className="investing-content">
        <div className="investing-stocks">
            <h6 className="investing-stocks-title">Stocks</h6>
            <p className="investing-stocks-para">Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
        </div>
        <div><img className="investing-stocks-img" src={process.env.PUBLIC_URL + './pic/investing-stocks.svg'} alt="investing stocks" /></div>
        <div><img className="investing-bitcoin-img" src={process.env.PUBLIC_URL + './pic/investing-bitcoin.svg'} alt="investing bitcoin" /></div>
        <div className="investing-bitcoin">
            <h6 className="investing-bitcoin-title">Bitcoin</h6>
            <p className="investing-bitcoin-para">Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>
        </div>
      </div>
      <div> <img className="investing-flash" src={process.env.PUBLIC_URL + './pic/Vector (3).svg'} alt="investing flash" /> </div>
      </div>
      
      <div className="investing-white">
      <div> <img className="investing-flash-graph" src={process.env.PUBLIC_URL + './pic/investing-graph-2.svg'} alt="investing graph 2" /> </div>
      <div> <img className="investing-floor-graph" src={process.env.PUBLIC_URL + './pic/investing-graph-1.svg'} alt="investing flash" /> </div>
      <div> <img className="investing-floor" src={process.env.PUBLIC_URL + './pic/investing-floor 1.svg'} alt="investing floor" /> </div>
      </div>
      <div className="investing-foot"><Foot/></div>
   </div>
  )
}

export default Investing