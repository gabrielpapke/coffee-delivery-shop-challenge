import { MapPin } from '@phosphor-icons/react'

import Logo from '../../assets/images/logo.svg'
import { HeaderContainer } from './styles'
import { Container } from '../../styles/styles'

import { CartCounter } from '../CartCounter'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <img src={Logo} alt="" />

        <div>
          <button className="location">
            <MapPin size={24} weight="fill" />
            Londrina, PR
          </button>

          <CartCounter />
        </div>
      </HeaderContainer>
    </Container>
  )
}
