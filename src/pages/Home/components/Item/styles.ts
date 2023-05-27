import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem 1.25rem;
  max-width: 256px;

  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;

  .coffee-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
      width: 7.5rem;
      height: 7.5rem;
      margin: -1.25rem auto 0.75rem;
    }

    .tags {
      justify-content: center;
      display: inline-flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .tags span {
      background-color: ${(props) => props.theme['yellow-light']};
      border-radius: 100px;
      padding: 0.25rem 0.5rem;

      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 700;

      padding-bottom: 0.5rem;
    }

    p {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }
  }

  .bottom-details {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      display: flex;
      align-items: baseline;
      color: ${(props) => props.theme['base-text']};

      small {
        font-size: 0.875rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      }

      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border: 0;
      border-radius: 6px;
      height: 2.375rem;
      width: 2.375rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
