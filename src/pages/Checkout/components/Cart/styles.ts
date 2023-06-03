import styled from 'styled-components'
import { Card } from '../../styles'

export const CartContainer = styled(Card)`
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;

  .cart-totals {
    padding-bottom: 1.5rem;
  }

  .cart-totals div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: 0.75rem;
    }

    small {
      font-size: 0.875rem;
    }
    span {
    }
    strong {
      font-size: 1.25rem;
    }
  }

  button[type='submit'] {
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    display: flex;
    width: 100%;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 700;
    height: 2.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const CartListContainer = styled.ul`
  list-style: none;

  img {
    max-width: 100%;
  }
  li {
    list-style: none;
    padding: 0.5rem 0.25rem;
    margin-bottom: 1.5rem;

    display: grid;
    grid-template-columns: 65px 1fr 70px;
    column-gap: 1.25rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
  }

  .product-name {
    color: ${(props) => props.theme['base-subtitle']};
  }

  .cart-options {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding-top: 0.5rem;
  }

  .remove {
    height: 2rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    border: 0;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    gap: 0.25rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  .price {
    font-weight: 700;
  }

  .emptyCart {
    text-align: center;
    strong {
      color: ${(props) => props.theme.purple};
      font-size: 1.25rem;
      display: block;
      font-family: 'Baloo 2', cursive;
    }
  }
`
