import { BannerContainer } from './styles'
import bannerImage from '../../../../assets/images/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Container } from '../../../../styles/styles'

export function Banner() {
  return (
    <BannerContainer>
      <Container className="container">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <i className="icon-shop">
                <ShoppingCart weight="fill" size={18} />
              </i>
              Compra simples e segura
            </li>

            <li>
              <i className="icon-package">
                <Package weight="fill" size={18} />
              </i>
              Embalagem mantém o café intacto
            </li>

            <li>
              <i className="icon-timer">
                <Timer weight="fill" size={18} />
              </i>
              Entrega rápida e rastreada
            </li>

            <li>
              <i className="icon-coffee">
                <Coffee weight="fill" size={18} />
              </i>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>

        <img src={bannerImage} alt="" />
      </Container>
    </BannerContainer>
  )
}
