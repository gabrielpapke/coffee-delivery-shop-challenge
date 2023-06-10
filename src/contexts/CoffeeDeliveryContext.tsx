import { ReactNode, createContext, useReducer } from 'react'
import { Coffee, CoffeeCart, cartReducer } from '../reducers/cart/reducer'
import {
  removeCartItemAction,
  updateCartItemAction,
} from '../reducers/cart/actions'

interface CoffeeDeliveryContextProviderProps {
  children: ReactNode
}

interface CoffeeDeliveryContextType {
  cartItems: CoffeeCart[]
  totalCounter: number
  updateCartItem: (item: Coffee, qty: number) => void
  removeCartItem: (item: Coffee) => void
}

export const CoffeeDeliveryContext = createContext(
  {} as CoffeeDeliveryContextType,
)

export function CoffeeDeliveryContextProvider({
  children,
}: CoffeeDeliveryContextProviderProps) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    cartItems: [],
    totalCounter: 0,
  })

  const { cartItems, totalCounter } = cartState

  function updateCartItem(item: Coffee, qty: number) {
    dispatchCart(updateCartItemAction(item, qty))
  }

  function removeCartItem(item: Coffee) {
    dispatchCart(removeCartItemAction(item))
  }

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        cartItems,
        totalCounter,
        updateCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}
