import { SuccessLayout } from './styles'
import successIllustration from '../../assets/images/success-illustration.svg'
import { CurrencyDollar, MapPin, Package } from '@phosphor-icons/react'
import { IconCircle } from '../../components/IconCircle'
import { CoffeeDeliveryContext } from '../../contexts/CoffeeDeliveryContext'
import { useContext } from 'react'

export function Success() {
  const { address, paymentMethod } = useContext(CoffeeDeliveryContext)
  return (
    <SuccessLayout>
      <header>
        <h2>Uhu! Pedido confirmado</h2>

        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <div className="content">
        <div className="box">
          <IconCircle Icon={MapPin} iconBackgroundColor="purple">
            <div>
              Entrega em{' '}
              <strong>
                {address.rua}, {address.numero}
              </strong>{' '}
              <br />
              {address.bairro} - {address.cidade}, {address.estado}
            </div>
          </IconCircle>

          <IconCircle Icon={Package} iconBackgroundColor="yellow">
            <div>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </div>
          </IconCircle>

          <IconCircle
            Icon={CurrencyDollar}
            weight="regular"
            iconBackgroundColor="yellow-dark"
          >
            <div>
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </div>
          </IconCircle>
        </div>

        <div className="image">
          <img src={successIllustration} alt="" />
        </div>
      </div>
    </SuccessLayout>
  )
}
