import { ShoppingCart } from '@phosphor-icons/react'
import { CartButtonContainer } from './styles'
import { CoffeeDeliveryContext } from '../../contexts/CoffeeDeliveryContext'
import { useContext } from 'react'

export function CartCounter() {
  const { totalCounter } = useContext(CoffeeDeliveryContext)

  return (
    <CartButtonContainer>
      <ShoppingCart size={24} weight="fill" />

      <small>{totalCounter}</small>
    </CartButtonContainer>
  )
}
