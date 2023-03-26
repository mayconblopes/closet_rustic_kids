import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../../components/card-icon/card-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { LogoContainerStyle, NavigationContainerStyle, NavLinksStyle, NavLinkStyle } from './navigation.styles'

function Navigation() {
  const userContext = useContext(UserContext)
  const cartContext = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainerStyle>
        <LogoContainerStyle to='/'>
          <Logo className='logo' />
        </LogoContainerStyle>

        <NavLinksStyle>
          <NavLinkStyle to='/shop'>
            SHOP
          </NavLinkStyle>

          {userContext.currentUser ? (
            <NavLinkStyle as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLinkStyle>
          ) : (
            <NavLinkStyle to='/auth'>
              SIGN IN
            </NavLinkStyle>
          )}
          <CartIcon />
        </NavLinksStyle>
        {cartContext.isCartOpen && 
          <CartDropdown />
        }
      </NavigationContainerStyle>
      {/* The Outlet component is used here to render child routes. */}
      {/* This element will be replaced with the appropriate route based on the current URL pathname. */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
