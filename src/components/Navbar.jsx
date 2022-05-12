import React from 'react'
import logo from '../assets/logo.svg'
import dropdownIcon from '../assets/icon-arrow-down.svg'
import menuIcon from '../assets/icon-menu.svg'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='logo' className='logo-svg' />
      </div>
      <ul className='nav__list app-flex'>
        <li className='nav__list-item'><p className='p-text features'>Features <span> <img src={dropdownIcon} alt="" /> </span></p></li>
        <li className='nav__list-item'><p className='p-text company'>Company <span> <img src={dropdownIcon} alt="" /> </span></p></li>
        <li className='nav__list-item'><p className='p-text careers'>Careers</p></li>
        <li className='nav__list-item'><p className='p-text about'>About</p></li>
        <li className='nav__list-item'><p className='p-text login'>Login</p></li>
        <li className='nav__list-item'><p className='p-text register'>Register</p></li>
      </ul>










    </nav>
  )
}

export default Navbar