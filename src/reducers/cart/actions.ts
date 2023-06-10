import { Coffee } from './reducer'

export enum ActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
}

export function addItemToCartAction(item: Coffee, qty: number) {
  return {
    type: ActionsType.ADD_TO_CART,
    payload: {
      item,
      qty,
    },
  }
}
