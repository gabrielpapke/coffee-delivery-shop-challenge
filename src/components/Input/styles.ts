import styled from 'styled-components'

export const InputContainer = styled.div`
  input {
    height: 42px;
    padding: 0.75rem;
    background-color: ${(props) => props.theme['base-input']};
    border-color: ${(props) => props.theme['base-button']};
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    width: 100%;
  }

  &.isOptional {
    position: relative;

    small {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      color: ${(props) => props.theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
      display: block;
      transform: translateY(-50%);
    }

    input:not(:placeholder-shown) + small,
    input:focus + small {
      display: none;
    }
  }
`
