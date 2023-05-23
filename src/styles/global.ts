import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    /* font-family: 'Baloo 2', cursive; */
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px #777;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`