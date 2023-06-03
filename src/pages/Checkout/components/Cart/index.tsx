import { Trash } from '@phosphor-icons/react'
import { InputCounter } from '../../../../components/InputCounter'
import expressoImg from '../../../../assets/images/coffee-types/expresso.svg'
import { CartContainer, CartListContainer } from './styles'

export function Cart() {
  const items: any[] = [
    // {
    //   name: 'Expresso Tradicional',
    // },
    // {
    //   name: 'Expresso Americano',
    // },
  ]
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
                  <InputCounter inputSize="small" value={1} />

                  <button className="remove" type="button">
                    <Trash weight="regular" size={16} />
                    Remover
                  </button>
                </div>
              </div>
              <span className="price">R$ 19,90</span>
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
