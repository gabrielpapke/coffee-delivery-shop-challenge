import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Coffee, CoffeeCart, cartReducer } from '../reducers/cart/reducer'
import {
  clearCartAction,
  removeCartItemAction,
  updateCartItemAction,
} from '../reducers/cart/actions'

interface CoffeeDeliveryContextProviderProps {
  children: ReactNode
}

export interface AddressInfo {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  estado: string
}

export enum PaymentMethodEnum {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  CASH = 'Dinheiro',
  DEFAULT = '',
}

interface CoffeeDeliveryContextType {
  cartItems: CoffeeCart[]
  totalCounter: number
  address: AddressInfo
  paymentMethod: PaymentMethodEnum
  updateCartItem: (item: Coffee, qty: number) => void
  removeCartItem: (item: Coffee) => void
  finishTheOrder: (
    address: AddressInfo,
    paymentMethod: PaymentMethodEnum,
  ) => void
}

export const CoffeeDeliveryContext = createContext(
  {} as CoffeeDeliveryContextType,
)

export function CoffeeDeliveryContextProvider({
  children,
}: CoffeeDeliveryContextProviderProps) {
  const [address, setAddress] = useState<AddressInfo>({
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
    rua: '',
  })

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodEnum>(
    PaymentMethodEnum.DEFAULT,
  )

  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    {
      cartItems: [],
      totalCounter: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cartItems, totalCounter } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function updateCartItem(item: Coffee, qty: number) {
    dispatchCart(updateCartItemAction(item, qty))
  }

  function removeCartItem(item: Coffee) {
    dispatchCart(removeCartItemAction(item))
  }

  function clearCart() {
    dispatchCart(clearCartAction())
  }

  function finishTheOrder(
    address: AddressInfo,
    paymentMethod: PaymentMethodEnum,
  ) {
    setAddress(address)
    setPaymentMethod(paymentMethod)
    clearCart()
  }

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        cartItems,
        totalCounter,
        updateCartItem,
        removeCartItem,
        address,
        paymentMethod,
        finishTheOrder,
      }}
    >
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}
