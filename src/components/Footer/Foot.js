import React from 'react'

const Foot = () => {
  return (
    <div className="footer">
        <footer>
      <div className="left-side">
       <button className="logo-button">
       <img className="logo-apple" src={process.env.PUBLIC_URL + './pic/apple.svg'} alt="logoapple" />
         App store
       </button>
       <button className="logo-button">
       <img className="logo-play" src={process.env.PUBLIC_URL + './pic/play.svg'} alt="logoplay" />
         Play store
       </button>
      </div>
      <div className="right-side">
        <p className="footer-p">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
        <div className="logos">
        <img className="logo1" src={process.env.PUBLIC_URL + './pic/logo1.svg'} alt="logo1" />
        <img className="logo2" src={process.env.PUBLIC_URL + './pic/logo2.svg'} alt="logo2" />
        <img className="logo3" src={process.env.PUBLIC_URL + './pic/logo3.svg'} alt="logo3" />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Foot