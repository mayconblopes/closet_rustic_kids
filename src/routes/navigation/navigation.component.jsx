import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../../components/card-icon/card-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

function Navigation() {
  const userContext = useContext(UserContext)
  const cartContext = useContext(CartContext)

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

          {userContext.currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartContext.isCartOpen && 
          <CartDropdown />
        }
      </div>
      {/* The Outlet component is used here to render child routes. */}
      {/* This element will be replaced with the appropriate route based on the current URL pathname. */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
