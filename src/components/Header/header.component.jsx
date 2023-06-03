import React from 'react'
import { Link } from 'react-router-dom'
import {logOut } from '../../firebase/firebase.utils'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/084 crown.svg'
import { useSelector } from 'react-redux'

const Header = () => {
  // const user = auth.currentUser
  const currentuser = useSelector(state => state.users.currentUser)
  // console.log(user)
  return (
    <div className='header'>
      <Link className="logo-container" to='/'>
        <Logo />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/contact'>contact</Link>
        {
          currentuser?
          (<div className='option' onClick={() =>  logOut()}>
            Sign Out
          </div>)
          :
          (<Link className='option' to='/sign'>
              Sign In
          </Link>)
        }
      </div>
    </div>
  )
}

export default Header