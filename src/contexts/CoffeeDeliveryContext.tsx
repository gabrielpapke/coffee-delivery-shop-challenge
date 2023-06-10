import { ReactNode, createContext, useReducer, useState } from 'react'
import { Coffee, CoffeeCart, cartReducer } from '../reducers/cart/reducer'
import { addItemToCartAction } from '../reducers/cart/actions'

interface CoffeeDeliveryContextProviderProps {
  children: ReactNode
}

interface CoffeeDeliveryContextType {
  cartItems: CoffeeCart[]
  totalCounter: number
  addItemToCart: (item: any, qty: number) => void
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

  function addItemToCart(item: Coffee, qty: number) {
    dispatchCart(addItemToCartAction(item, qty))
  }

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        cartItems,
        totalCounter,
        addItemToCart,
      }}
    >
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}
