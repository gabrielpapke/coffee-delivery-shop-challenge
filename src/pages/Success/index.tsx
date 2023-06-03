import { SuccessLayout } from './styles'
import successIllustration from '../../assets/images/success-illustration.svg'
import { CurrencyDollar, MapPin, Package } from '@phosphor-icons/react'
import { IconCircle } from '../../components/IconCircle'

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
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
