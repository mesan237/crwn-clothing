import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/084 crown.svg'

const Header = () => {
  return (
    <div className='header'>
      <Link className="logo-container" to='/'>
        <Logo />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/contact'>contact</Link>
        <Link className='option' to='/sign'>Sign In</Link>
      </div>
    </div>
  )
}

export default Header