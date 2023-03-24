import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

function Navigation() {
  const context = useContext(UserContext)

  async function signOutHandler() {
    await signOutUser()
    context.setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {context.currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      {/* The Outlet component is used here to render child routes. */}
      {/* This element will be replaced with the appropriate route based on the current URL pathname. */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
