import React from 'react'
import Button from './Button';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <nav className="navigation">
    <div className="logo">
      <img src="https://files.catbox.moe/6agriw.png" height="100px" alt="ShipWreck Cove" />
    </div>
    <NavLinks/>
    <div className="nav-btns-con">
      <a href="https://t.me/Shipwreckc0ve">
        <Button className="nav-quote"
            name={'Telegram'}
            icon={'fas fa-chevron-right'}
            arrow={'arrow'}
            blob={'blob'}
        /></a>
    </div>
</nav>
  )
}

export default NavBar