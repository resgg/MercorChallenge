import React from 'react'

const Banking = () => {
  return (
    <div className="banking-container">
        <div className="banking-block">
            <div className="banking-text">
                <h1 className="banking-title">Banking</h1>
                <p className="banking-para">Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
                and account number.</p>
            </div>
            <div className="banking-img">
                <img className="banking-image" src={process.env.PUBLIC_URL + './pic/banking-phone.svg'} alt="bank phone" />
            </div>
            <div> <img className="banking-object-5" src={process.env.PUBLIC_URL + '/pic/bo5.svg'} alt="bo 5" /></div>
           
          <div> <img className="banking-object-1" src={process.env.PUBLIC_URL + '/pic/bo1.svg'} alt="bo 1" /></div>
          <div><img className="banking-object-4" src={process.env.PUBLIC_URL + '/pic/bo4.svg'} alt="bo 4" /></div>
          <div><img className="banking-object-2" src={process.env.PUBLIC_URL + '/pic/bo2.svg'} alt="bo 2" /></div>
          <div><img className="banking-object-3" src={process.env.PUBLIC_URL + '/pic/bo3.svg'} alt="bo 3" /></div> 
          <div><img className="banking-object-6" src={process.env.PUBLIC_URL + '/pic/bo6.svg'} alt="bo 6" /></div> 
          <div><img className="banking-object-7" src={process.env.PUBLIC_URL + '/pic/bo7.svg'} alt="bo 7" /></div> 
          <div><img className="banking-object-8" src={process.env.PUBLIC_URL + '/pic/bo8.svg'} alt="bo 8" /></div> 
          <div><img className="banking-object-9" src={process.env.PUBLIC_URL + '/pic/bo9.svg'} alt="bo 9" /></div> 
          <div><img className="banking-object-10" src={process.env.PUBLIC_URL + '/pic/bo10.svg'} alt="bo 10" /></div> 
          <div><img className="banking-object-11" src={process.env.PUBLIC_URL + '/pic/bo11.svg'} alt="bo 10" /></div> 
          <div><img className="banking-object-12" src={process.env.PUBLIC_URL + '/pic/bo12.svg'} alt="bo 10" /></div> 
         
        </div>
       
    </div>
  )
}
export default Banking