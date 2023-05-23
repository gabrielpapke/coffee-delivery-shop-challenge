import styled from 'styled-components'

export const CartButtonContainer = styled.a`
  background-color: ${(props) => props.theme['yellow-light']};
  display: block;
  position: relative;
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  small {
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    position: absolute;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);

    font-weight: 700;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`
