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
        <Input name="cep" id="cep" type="text" placeholder="CEP" required />

        <Input name="rua" id="rua" type="text" placeholder="Rua" required />

        <Input
          name="numero"
          id="numero"
          type="text"
          placeholder="Número"
          required
        />

        <Input
          name="complemento"
          id="complemento"
          type="text"
          placeholder="Complemento"
        />

        <Input
          name="bairro"
          id="bairro"
          type="text"
          placeholder="Bairro"
          required
        />

        <Input
          name="cidade"
          id="cidade"
          type="text"
          placeholder="Cidade"
          required
        />

        <Input
          name="estado"
          id="estado"
          type="text"
          placeholder="UF"
          required
        />
      </fieldset>
    </AddressFormContainer>
  )
}
