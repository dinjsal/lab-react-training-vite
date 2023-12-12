import React from 'react'
import visaLogo from '/src/assets/images/visa.png'
import mastercardLogo from '/src/assets/images/mastercard.png'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    // const divStyle = {
    //     color: {color},
    //     backgroundColor: {bgColor},
    //   };
    const str = '•';
    
  return (
    <div className="credit-card" style={{backgroundColor : "#11aa99", color: 'white'}}>
        <section className="credit-card1">
        <p>{type && (type==="Visa") ? (
              <img
                style={{height:"30px", width: '80px'}} 
                src={visaLogo} alt="visa-logo"/>
            ) : (
                <img
                  style={{height:"40px", width: '80px'}} 
                  src={mastercardLogo} alt="mastercard-logo" />
              )}</p>
        </section>
        <section className="credit-card2 card-number">
        <p>{str.repeat(4)} {str.repeat(4)} {str.repeat(4)} {number.slice(12)}</p>
        </section>
        <section className="credit-card3">
        <p>Expires {expirationMonth && expirationMonth.toString().length === 1 ? "0" + expirationMonth : expirationMonth}/{expirationYear.toString().slice(2)} <span>{bank}</span></p>
        <p>{owner}</p>
        </section>
    </div>
  )
}

export default CreditCard