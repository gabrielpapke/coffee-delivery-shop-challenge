import { CurrencyDollar } from '@phosphor-icons/react'
import { PaymentMethodContainer } from './styles'
import { useTheme } from 'styled-components'

export function PaymentMethod() {
  const theme = useTheme()

  return (
    <PaymentMethodContainer>
      <header>
        <CurrencyDollar size={22} weight="regular" color={theme?.purple} />

        <div>
          <h3>Pagamento</h3>

          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>
    </PaymentMethodContainer>
  )
}
