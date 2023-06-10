import styled from 'styled-components'

const InputBaseContainer = styled.div`
  user-select: none;

  max-width: 4.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  svg {
    min-width: 0.875rem;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    min-width: 1.25rem;
    height: 100%;
    background: transparent;
    border: 0;
    text-align: center;
    cursor: default;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: 0;
      border: 0;
      box-shadow: none;
    }
  }
`
export const InputMediumContainer = styled(InputBaseContainer)`
  height: 2.375rem;
`
export const InputSmallContainer = styled(InputBaseContainer)`
  height: 2rem;
`
