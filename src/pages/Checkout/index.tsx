import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'

import { CheckoutLayout } from './styles'

export function Checkout() {
  return (
    <CheckoutLayout>
      <div>
        <h2>Complete seu pedido</h2>

        <AddressForm className="card" />

        <PaymentMethod className="card" />
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        <Cart className="card" />
      </div>
    </CheckoutLayout>
  )
}
