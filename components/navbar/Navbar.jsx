import React, {useContext, useState} from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu")
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
        <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"0":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar