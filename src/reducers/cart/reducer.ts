import { ActionsType } from './actions'

export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  tags?: string[]
}

export interface CoffeeCart extends Coffee {
  qty: number
}

interface CartState {
  cartItems: CoffeeCart[]
  totalCounter: number
}

export function cartReducer(state: CartState, action: any): CartState {
  switch (action.type) {
    case ActionsType.ADD_TO_CART: {
      const newItemId = action.payload.item.id

      const itemFound = state.cartItems.find((item) => item.id === newItemId)

      if (itemFound) {
        return {
          totalCounter: state.totalCounter + action.payload.qty,
          cartItems: state.cartItems.map((item) => {
            if (item.id === itemFound.id)
              return { ...item, qty: item.qty + action.payload.qty }

            return item
          }),
        }
      }
      return {
        totalCounter: state.totalCounter + action.payload.qty,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload.item,
            qty: action.payload.qty,
          },
        ],
      }
    }
    default:
      return state
  }
}
