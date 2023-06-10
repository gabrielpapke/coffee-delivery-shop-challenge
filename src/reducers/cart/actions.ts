import { Coffee } from './reducer'

export enum ActionsType {
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
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
