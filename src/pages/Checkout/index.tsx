import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'

import { CheckoutLayout } from './styles'

export function Checkout() {
  function handleSubmit() {
    return console.log('submit')
  }

  return (
    <CheckoutLayout>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Complete seu pedido</h2>

          <AddressForm />

          <PaymentMethod />
        </div>

        <div>
          <h2>Cafés selecionados</h2>

          <Cart />
        </div>
      </form>
    </CheckoutLayout>
  )
}
