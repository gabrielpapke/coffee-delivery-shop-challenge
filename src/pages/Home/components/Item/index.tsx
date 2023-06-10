import { ShoppingCart } from '@phosphor-icons/react'

import { ItemContainer } from './styles'

import expressoImg from '../../../../assets/images/coffee-types/expresso.svg'
import { InputCounter } from '../../../../components/InputCounter'
import { useContext, useState } from 'react'
import { CoffeeDeliveryContext } from '../../../../contexts/CoffeeDeliveryContext'
import { Coffee } from '../../../../reducers/cart/reducer'

interface ItemProps {
  coffee: Coffee
}

export function Item({ coffee }: ItemProps) {
  const { updateCartItem } = useContext(CoffeeDeliveryContext)
  const [qty, setQty] = useState(1)

  function handleLessClick() {
    setQty((state) => (state > 1 ? state - 1 : 1))
  }
  function handleMoreClick() {
    setQty((state) => state + 1)
  }

  function handleAddToCart() {
    updateCartItem(coffee, qty)

    setQty(1)
  }
  return (
    <ItemContainer>
      <div className="coffee-details">
        <img src={expressoImg} alt="Café Expresso Tradicional" />

        <span className="tags">
          {coffee.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </span>

        <h3>{coffee.name}</h3>

        <p>{coffee.description}</p>
      </div>

      <div className="bottom-details">
        <span className="price">
          <small>R$</small>&nbsp;{coffee.price}
        </span>

        <div>
          <InputCounter
            value={qty}
            onClickLess={handleLessClick}
            onClickMore={handleMoreClick}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={24} />
          </button>
        </div>
      </div>
    </ItemContainer>
  )
}
