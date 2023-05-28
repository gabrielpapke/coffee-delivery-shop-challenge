import styled from 'styled-components'

import { Card } from '../../styles'

export const PaymentMethodContainer = styled(Card)`
  fieldset {
    border: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 0.75rem;
  }
`

export const OptionContainer = styled.div`
  input {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    height: 0;
    width: 0;
    display: block;
    overflow: hidden;

    &:focus {
      box-shadow: none;
    }
  }

  label {
    background-color: ${(props) => props.theme['base-button']};
    cursor: pointer;
    height: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    border-color: transparent;
    border-width: 1px;
    border-style: solid;

    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
  }

  label:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  input:checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['base-subtitle']};
    border-color: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
