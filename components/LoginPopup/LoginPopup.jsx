import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login");
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState} </h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState === "Login"?<></>: <input type="text" placeholder="Enter  your Name" required /> }              
                <input type="email" placeholder='Enter your Email Address' required /> 
                <input type="password" placeholder='Enter your Password' required />
            </div>
            <button>{currentState==="Sign Up"? "Create Account": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continueing, i agree to the terms and conditions of this website.</p>
            </div>
            {currentState==="Login"
            ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            : <p>Already have an Account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
            

        </form>
    </div>
  )
}

export default LoginPopup