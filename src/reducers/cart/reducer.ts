import { ActionsType } from './actions'

export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  tags?: string[]
  imagePath: string
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
    case ActionsType.UPDATE_CART_ITEM: {
      const newItemId = action.payload.item.id

      const itemFound = state.cartItems.find((item) => item.id === newItemId)

      if (itemFound?.qty === 1 && action.payload.qty < 0) return state

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

    case ActionsType.REMOVE_CART_ITEM: {
      const { id: itemId, qty: itemQty } = action.payload.item

      return {
        totalCounter: state.totalCounter - itemQty,
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
      }
    }

    case ActionsType.CLEAR_CART: {
      return {
        totalCounter: 0,
        cartItems: [],
      }
    }

    default:
      return state
  }
}
