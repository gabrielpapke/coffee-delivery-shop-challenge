import { MapPinLine } from '@phosphor-icons/react'
import { AddressFormContainer } from './styles'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'

export function AddressForm() {
  const theme = useTheme()

  return (
    <AddressFormContainer>
      <header>
        <MapPinLine size={22} weight="regular" color={theme?.['yellow-dark']} />

        <div>
          <h3>Endereço de Entrega</h3>

          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>

      <fieldset>
        <Input type="text" placeholder="CEP" required />
        <Input type="text" placeholder="Rua" required />
        <Input type="text" placeholder="Número" required />
        <Input type="text" placeholder="Complemento" />
        <Input type="text" placeholder="Bairro" required />
        <Input type="text" placeholder="Cidade" required />
        <Input type="text" placeholder="UF" required />
      </fieldset>
    </AddressFormContainer>
  )
}
