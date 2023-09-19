import React from 'react'

const Cashcard = () => {
  return (
    <div className="cashcard-container">
        <div className="cashcard-block">
            <div className="cashcard-text">
                <h1 className="cashcard-title">Cash Card & Boost</h1>
                <p className="cashcard-para">The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
            </div>
            <div className="cashcard-img">
              <img className="banking-image" src={process.env.PUBLIC_URL + './pic/cash-phone.svg'} alt="bank phone" />
            </div>
        </div>
        <div> <img className="cash-stairboot-one" src={process.env.PUBLIC_URL + './pic/boost-stairs-1.svg'} alt="cash stair" /> </div>
        <div> <img className="cash-stairboot-two" src={process.env.PUBLIC_URL + './pic/boost-stairs-2.svg'} alt="cash stair" /> </div>
        <div> <img className="boost boost-hand" src={process.env.PUBLIC_URL + './pic/boost-hand.svg'} alt="boost hand" /> </div>
        <div> <img className="boost boost-card" src={process.env.PUBLIC_URL + './pic/boost-card.svg'} alt="boost card" /> </div>
        <div> <img className="boost boost-burger" src={process.env.PUBLIC_URL + './pic/boost-burger.svg'} alt="boost burger" /> </div>
        <div> <img className="boost boost-shoe" src={process.env.PUBLIC_URL + './pic/boost-shoe.svg'} alt="boost shoe" /> </div>
        <div> <img className="boost boost-coffee" src={process.env.PUBLIC_URL + './pic/boost-coffee.svg'} alt="boost coffee" /> </div>

    </div>
  )
}

export default Cashcard