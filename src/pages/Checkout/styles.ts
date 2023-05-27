import styled from 'styled-components'
import { Container } from '../../styles/styles'

export const CheckoutLayout = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;
  padding-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    padding-bottom: 1rem;
  }

  .card {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;

    & ~ .card {
      margin-top: 0.75rem;
    }
  }
`

export const Card = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  & ~ div {
    margin-top: 0.75rem;
  }
`
