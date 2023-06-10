import { Trash } from '@phosphor-icons/react'
import { InputCounter } from '../../../../components/InputCounter'
import expressoImg from '../../../../assets/images/coffee-types/expresso.svg'
import { CartContainer, CartListContainer } from './styles'
import { useContext } from 'react'
import { CoffeeDeliveryContext } from '../../../../contexts/CoffeeDeliveryContext'
import { Coffee } from '../../../../reducers/cart/reducer'

export function Cart() {
  const {
    cartItems: items,
    updateCartItem,
    removeCartItem,
  } = useContext(CoffeeDeliveryContext)

  function handleClickMore(item: Coffee) {
    updateCartItem(item, 1)
  }

  function handleClickLess(item: Coffee) {
    updateCartItem(item, -1)
  }

  function handleRemove(item: Coffee) {
    removeCartItem(item)
  }

  return (
    <CartContainer>
      <CartListContainer>
        {items && items.length ? (
          items.map((item, index) => (
            <li key={index}>
              <img src={expressoImg} alt="" />

              <div>
                <span className="product-name">{item.name}</span>

                <div className="cart-options">
                  <InputCounter
                    onClickMore={() => handleClickMore(item)}
                    onClickLess={() => handleClickLess(item)}
                    inputSize="small"
                    value={item.qty}
                  />

                  <button
                    className="remove"
                    type="button"
                    onClick={() => handleRemove(item)}
                  >
                    <Trash weight="regular" size={16} />
                    Remover
                  </button>
                </div>
              </div>
              <span className="price">R$ {item.price}</span>
            </li>
          ))
        ) : (
          <div className="emptyCart">
            <strong>Que pena! :(</strong>
            <br />O Carrinho está vazio.
          </div>
        )}
      </CartListContainer>

      {items && items.length > 0 && (
        <>
          <div className="cart-totals">
            <div>
              <small>Total de itens</small>
              <span>R$ 29,70</span>
            </div>

            <div>
              <small>Entrega</small>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </div>

          <button type="submit">Confirmar pedido</button>
        </>
      )}
    </CartContainer>
  )
}
