import styled from 'styled-components'
import background from '../../../../assets/images/background.png'
// import banner from '../../../../assets/images/banner.png'

export const BannerContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  padding: 5.875rem 0 6.75rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      max-width: 36rem;
    }
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    padding-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-size: 1.3em;
  }

  ul {
    padding-top: 4rem;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    align-items: flex-start;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.875rem;
  }

  ul li i {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${(props) => props.theme.white};

    &.icon-shop {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    &.icon-package {
      background-color: ${(props) => props.theme['base-text']};
    }

    &.icon-timer {
      background-color: ${(props) => props.theme.yellow};
    }

    &.icon-coffee {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
