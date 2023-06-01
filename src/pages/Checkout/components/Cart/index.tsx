import { Trash } from '@phosphor-icons/react'
import { InputCounter } from '../../../../components/InputCounter'
import expressoImg from '../../../../assets/images/coffee-types/expresso.svg'
import { CartContainer, CartListContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CartListContainer>
        <li>
          <img src={expressoImg} alt="" />

          <div>
            <span className="product-name">Expresso Tradicional</span>

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

        <li>
          <img src={expressoImg} alt="" />

          <div>
            <span className="product-name">Expresso Tradicional</span>

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
      </CartListContainer>

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
    </CartContainer>
  )
}
