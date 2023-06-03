import { NavLink } from 'react-router-dom'
import { MapPin } from '@phosphor-icons/react'

import Logo from '../../assets/images/logo.svg'
import { HeaderContainer } from './styles'
import { Container } from '../../styles/styles'

import { CartCounter } from '../CartCounter'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>

        <div>
          <button className="location">
            <MapPin size={24} weight="fill" />
            Londrina, PR
          </button>

          <NavLink to="checkout">
            <CartCounter />
          </NavLink>
        </div>
      </HeaderContainer>
    </Container>
  )
}
