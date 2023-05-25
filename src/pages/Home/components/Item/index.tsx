import { ShoppingCart } from '@phosphor-icons/react'

import { ItemContainer } from './styles'

import expressoImg from '../../../../assets/images/coffee-types/expresso.svg'
import { InputCounter } from '../../../../components/InputCounter'

export function Item() {
  return (
    <ItemContainer>
      <div className="coffee-details">
        <img src={expressoImg} alt="Café Expresso Tradicional" />

        <span className="tags">
          <span>tradicional</span>
          <span>com leite</span>
        </span>

        <h3>Expresso Tradicional</h3>

        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <div className="bottom-details">
        <span className="price">
          <small>R$</small>&nbsp;9,90
        </span>

        <div>
          <InputCounter />

          <button>
            <ShoppingCart weight="fill" size={24} />
          </button>
        </div>
      </div>
    </ItemContainer>
  )
}
