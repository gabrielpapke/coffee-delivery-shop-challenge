import { Coffee } from './reducer'

export enum ActionsType {
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

export function updateCartItemAction(item: Coffee, qty: number) {
  return {
    type: ActionsType.UPDATE_CART_ITEM,
    payload: {
      item,
      qty,
    },
  }
}

export function removeCartItemAction(item: Coffee) {
  return {
    type: ActionsType.REMOVE_CART_ITEM,
    payload: {
      item,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionsType.CLEAR_CART,
  }
}
