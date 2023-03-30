import React, { Fragment, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Logo from '../../assets/mmbflogo.png'
import CartIcon from '../../components/card-icon/card-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  LogoContainerStyle,
  NavigationContainerStyle,
  NavLinksStyle,
  NavLinkStyle,
} from './navigation.styles'

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const cartContext = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <Fragment>
      <NavigationContainerStyle>
        <LogoContainerStyle to='/'>
          <img src={Logo} className='logo' />
        </LogoContainerStyle>

        <NavLinksStyle>
          {!currentUser ? (
            <NavLinkStyle to='/shop'>SHOP</NavLinkStyle>
          ) : (
            <NavLinkStyle to='/admin'>ADM PANEL</NavLinkStyle>
          )}

          {currentUser ? (
            <NavLinkStyle
              as='span'
              onClick={() => {
                signOutUser()
                navigate('/')
              }}
            >
              SIGN OUT ({currentUser.email})
            </NavLinkStyle>
          ) : (
            <NavLinkStyle to='/auth'>ADMIN</NavLinkStyle>
          )}
          <CartIcon />
        </NavLinksStyle>
        {cartContext.isCartOpen && <CartDropdown />}
      </NavigationContainerStyle>
      {/* The Outlet component is used here to render child routes. */}
      {/* This element will be replaced with the appropriate route based on the current URL pathname. */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
