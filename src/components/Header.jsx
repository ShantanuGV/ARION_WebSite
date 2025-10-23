import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/arion-logo.png' // rename your uploaded logo as arion-logo.png inside src/assets

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="ARION Logo" className="logo" />
        <h1>ARION</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
export default Header