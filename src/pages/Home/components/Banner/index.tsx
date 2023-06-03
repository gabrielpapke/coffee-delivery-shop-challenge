import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import { IconCircle } from '../../../../components/IconCircle'

import { BannerContainer } from './styles'
import { Container } from '../../../../styles/styles'
import bannerImage from '../../../../assets/images/banner.png'

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
              <IconCircle iconBackgroundColor="yellow-dark" Icon={ShoppingCart}>
                Compra simples e segura
              </IconCircle>
            </li>

            <li>
              <IconCircle iconBackgroundColor="base-text" Icon={Package}>
                Embalagem mantém o café intacto
              </IconCircle>
            </li>

            <li>
              <IconCircle iconBackgroundColor="yellow" Icon={Timer}>
                Entrega rápida e rastreada
              </IconCircle>
            </li>

            <li>
              <IconCircle iconBackgroundColor="purple" Icon={Coffee}>
                O café chega fresquinho até você
              </IconCircle>
            </li>
          </ul>
        </div>

        <img src={bannerImage} alt="" />
      </Container>
    </BannerContainer>
  )
}
