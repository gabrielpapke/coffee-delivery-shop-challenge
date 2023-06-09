import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { PaymentMethodContainer, OptionContainer } from './styles'
import { useTheme } from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodEnum } from '../../../../contexts/CoffeeDeliveryContext'

export function PaymentMethod() {
  const theme = useTheme()
  const { register } = useFormContext()

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

      <fieldset>
        <OptionContainer>
          <input
            {...register('paymentMethod')}
            type="radio"
            value={PaymentMethodEnum.CREDIT_CARD}
            name="paymentMethod"
            id="credit"
          />
          <label htmlFor="credit">
            <CreditCard weight="regular" size={16} />
            Cartão de Crédito
          </label>
        </OptionContainer>

        <OptionContainer>
          <input
            {...register('paymentMethod')}
            type="radio"
            value={PaymentMethodEnum.DEBIT_CARD}
            name="paymentMethod"
            id="debit"
          />
          <label htmlFor="debit">
            <Bank weight="regular" size={16} />
            Cartão de Débito
          </label>
        </OptionContainer>

        <OptionContainer>
          <input
            {...register('paymentMethod')}
            type="radio"
            value={PaymentMethodEnum.CASH}
            name="paymentMethod"
            id="cash"
          />
          <label htmlFor="cash">
            <Money weight="regular" size={16} />
            Dinheiro
          </label>
        </OptionContainer>
      </fieldset>
    </PaymentMethodContainer>
  )
}
