import { ShoppingCart } from '@phosphor-icons/react'
import { CartButtonContainer } from './styles'

export function CartCounter() {
  return (
    <CartButtonContainer>
      <ShoppingCart size={24} weight="fill" />

      <small>3</small>
    </CartButtonContainer>
  )
}
