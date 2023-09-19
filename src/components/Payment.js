import React from 'react'
const Payment = () => {
  return (
  <div className="payment-body">
    <div className="payment-container">
      <div className="payment-block">
        <div className="payment-text">
          <h1 className="payment-title">Payments</h1>
          <p className="payment-para">Send and receive money with anyone, donate  to an important cause, or tip professionals. 
           Just enter a $cashtag, phone number, or scan their  QR code to pay.</p>
        </div>
        <div className="payment-img">
        <img className = "payment-image" src={process.env.PUBLIC_URL + '/pic/payments-phone 1.svg'} alt="payment phone" />
        </div>
         <img  className="line" src={process.env.PUBLIC_URL + '/pic/Vector (1).svg'} alt="lines floor phone" />
        </div>
        
        </div>
      
        <div className="pillar-random">
        <img className="pillar-image-1" src={process.env.PUBLIC_URL + '/pic/pillar1.svg'} alt="Pillar 1" />
        <img className="pillar-image-2" src={process.env.PUBLIC_URL + '/pic/pillar2.svg'} alt="Pillar 2" />
        <img className="pillar-image-3" src={process.env.PUBLIC_URL + '/pic/pillar3.svg'} alt="Pillar 3" />
        <img className="pillar-image-4" src={process.env.PUBLIC_URL + '/pic/pillar4.svg'} alt="Pillar 4" />
        <img className="pillar-image-5" src={process.env.PUBLIC_URL + '/pic/pillar5.svg'} alt="Pillar 5" />
        <img className="pillar-image-6" src={process.env.PUBLIC_URL + '/pic/pillar6.svg'} alt="Pillar 6" />
        <img className="pillar-image-7" src={process.env.PUBLIC_URL + '/pic/pillar77.svg'} alt="Pillar 7" />
        <img className="pillar-image-8" src={process.env.PUBLIC_URL + '/pic/pillar8.svg'} alt="Pillar 8" />
        <img className="pillar-image-9" src={process.env.PUBLIC_URL + '/pic/pillar9.svg'} alt="Pillar 9" />

        
          
        </div>

    </div>
  )
}

export default Payment