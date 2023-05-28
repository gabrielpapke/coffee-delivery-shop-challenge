import styled from 'styled-components'
import { Card } from '../../styles'

export const AddressFormContainer = styled(Card)`
  fieldset {
    border: 0;
    display: grid;
    grid-template-columns: 200px 1fr 60px;
    grid-column-gap: 0.75rem;
    grid-row-gap: 1rem;
  }

  :nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  :nth-child(2) {
    grid-area: 2 / 1 / 3 / 4;
  }
  :nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  :nth-child(4) {
    grid-area: 3 / 2 / 4 / 4;
  }
  :nth-child(5) {
    grid-area: 4 / 1 / 5 / 2;
  }
  :nth-child(6) {
    grid-area: 4 / 2 / 5 / 3;
  }
  :nth-child(7) {
    grid-area: 4 / 3 / 5 / 4;
  }
`
