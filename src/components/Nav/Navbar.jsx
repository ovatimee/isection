import React, { useState } from 'react'
import {images} from '../../assets'

import './Navbar.scss'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav>
      <div className='logo'>
        <img src={images.logo} alt='logo' className='logo-svg' />
      </div>
      <ul className='nav__list app-flex'>
        {['Features', 'Company', 'Careers', 'About', 'Logins', 'Register'].map((item) => (
          <li className='nav__list-item'>
            <a href="">{item}</a>
          </li>))}
      </ul>

      <div className='nav__menu'>
        <img src={images.menu} alt="" onClick={() => setToggle(true)} />
        {toggle && (
          <div>
            <img src={images.closeMenu} alt="" onClick={() => setToggle(false)} />
            <ul className='nav__list'>
              {['Features', 'Company', 'Careers', 'About', 'Logins', 'Register'].map((item) => (
                <li className='nav__list-item'>
                  <a href="">{item}</a>
                </li>))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar