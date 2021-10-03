import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '../utils'
import Logo from '../images/logo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav
      className='navbar bd-navbar '
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <img src={Logo} alt='logo' style={{ width: 150, height: 250 }} />
        </Link>
        <span
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </span>
      </div>
      <div className={open ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className='navbar-end '>
          {NavLinks.map((item, index) => (
            <>
              <Link
                key={index}
                to={item.link}
                className='navbar-item has-text-link is-capitalized is-narrow-mobile'
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
              <hr className='navbar-divider'></hr>
            </>
          ))}
          <div className='navbar-item is-hidden-mobile'>
            <button className='button is-primary has-text-white is-capitalized px-3 py-2 is-size-5'>
              start learning
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
