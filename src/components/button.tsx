import styled, { css } from 'styled-components'

const Button = styled.button<{ bordered?: boolean }>`
  position: relative;
  background-image: linear-gradient(-45deg, #0D7419, #6ADD6E);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 3rem;
  color: #FFF;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  transition: linear 0.25s;

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    border-radius: inherit;
    background-image: linear-gradient(-45deg, #0D7419, #6ADD6E);
    z-index: -1;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    &, &:before {
      background-image: linear-gradient(-45deg, #0a5913, #5cbf5f);
    }
  }

  ${(props) => props.bordered && css`
    background: #FFF;
    color: #0D7419;
    border: none;

    &:hover,
    &:focus {
      color: #FFF;
      background: transparent;
    }
  `}
`

export default Button
