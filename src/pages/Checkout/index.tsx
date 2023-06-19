import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutLayout } from './styles'
import { useContext } from 'react'
import {
  AddressInfo,
  CoffeeDeliveryContext,
  PaymentMethodEnum,
} from '../../contexts/CoffeeDeliveryContext'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe um CEP'),
  bairro: zod.string().min(1, 'Informe um bairro'),
  estado: zod.string().min(1, 'Informe um estado').max(2, 'Somente a sigla'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  numero: zod.string().min(1, 'Informe um número'),
  rua: zod.string().min(1, 'Informe uma rua'),
  complemento: zod.string(),
  paymentMethod: zod.nativeEnum(PaymentMethodEnum),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { finishTheOrder } = useContext(CoffeeDeliveryContext)
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      estado: '',
      numero: '',
      rua: '',
    },
  })

  const navigate = useNavigate()

  const { handleSubmit, reset } = checkoutForm

  function handleFinishOrder(data: CheckoutFormData) {
    const address: AddressInfo = {
      cep: data.cep,
      bairro: data.bairro,
      estado: data.estado,
      cidade: data.cidade,
      numero: data.numero,
      rua: data.rua,
      complemento: data.complemento,
    }

    const method: PaymentMethodEnum = data.paymentMethod
    finishTheOrder(address, method)
    reset()

    navigate('/success')
  }

  return (
    <CheckoutLayout>
      <form onSubmit={handleSubmit(handleFinishOrder)}>
        <FormProvider {...checkoutForm}>
          <div className="container">
            <div>
              <h2>Complete seu pedido</h2>

              <AddressForm />

              <PaymentMethod />
            </div>

            <div>
              <h2>Cafés selecionados</h2>

              <Cart />
            </div>
          </div>
        </FormProvider>
      </form>
    </CheckoutLayout>
  )
}
