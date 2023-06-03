import styled from 'styled-components'
import { Container } from '../../styles/styles'

export const SuccessLayout = styled(Container)`
  padding-bottom: 4rem;

  header {
    h2 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 2rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 526px 1fr;
    gap: 2rem;
    padding-top: 2.5rem;
  }

  .box {
    padding: 2.5rem;
    border: 1px ${(props) => props.theme.purple} solid;
    border-radius: 6px 36px;
    font-size: 1rem;
    align-self: flex-start;

    > div + div {
      margin-top: 2rem;
    }
  }
`
