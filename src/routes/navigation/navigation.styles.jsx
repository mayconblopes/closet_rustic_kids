import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainerStyle = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainerStyle = styled(Link)`

img {
    height: 100%;
    padding: 5px;
    width: 80px;
  }
`
export const NavLinksStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLinkStyle = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`