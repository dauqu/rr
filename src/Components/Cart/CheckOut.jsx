import React from 'react'
import "./Checkout.css";
export default function Checkout() {
    return (
        <>

            <div className="container">
                <div className="card">
                    <button className="proceed"><svg className="sendicon" width={24} height={24} viewBox="0 0 24 24">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg></button>
                    <img src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png" className="logo-card" />
                    <label>Card number:</label>
                    <input id="user" type="text" className="input cardnumber" placeholder="1234 5678 9101 1121" />
                    <label>Name:</label>
                    <input className="input name" placeholder="Edgar Pérez" />
                    <label className="toleft">CCV:</label>
                    <input className="input toleft ccv" placeholder={321} />
                </div>
                <div className="receipt">
                    <div className="col"><p>Cost:</p>
                        <h2 className="cost">$400</h2><br />
                        <p>Name:</p>
                        <h2 className="seller">Codedgar</h2>
                    </div>
                    <div className="col">
                        <p>Bought Items:</p>
                        <h3 className="bought-items">Corsair Mouse</h3>
                        <p className="bought-items description">Gaming mouse with shiny lights</p>
                        <p className="bought-items price">$200 (50% discount)</p><br />
                        <h3 className="bought-items">Gaming keyboard</h3>
                        <p className="bought-items description">Look mommmy, it has colors!</p>
                        <p className="bought-items price">$200 (50% discount)</p><br />
                    </div>
                    <p className="comprobe">This information will be sended to your email</p>
                </div>
            </div>

        </>

    )
}


