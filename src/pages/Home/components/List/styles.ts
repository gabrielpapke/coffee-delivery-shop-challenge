import styled from 'styled-components'
import { Container } from '../../../../styles/styles'

export const ListContainer = styled(Container)`
  padding-bottom: 4rem;
  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 3.375rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2.5rem 2rem;
  }
`
