import { HeaderContainer } from './styles'
import Logo from '../../assets/images/logo.svg'
import { CartCounter } from '../CartCounter'
import { MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
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
  )
}
