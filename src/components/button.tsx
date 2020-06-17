import styled, { css } from 'styled-components'

const Button = styled.button<{ bordered?: boolean }>`
  border-radius: 3rem;
  padding: 0.6rem 2.5rem;
  font-size: ${({ theme }) => theme.sizes.sizeS};
  font-family: 'Lato', sans-serif;
  color: ${({ theme }) => theme.colors.light};
  border: solid 4px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-50deg, #0D7419, #4ec752, #6ADD6E);
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: linear 0.2s;

  ${( props ) => props.bordered && css`
    box-shadow: 2px 10rem 1px ${({ theme }) => theme.colors.light} inset;
    color: ${({ theme }) => theme.colors.primary};
  `}
  
  &:hover {
    cursor: pointer;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.light};
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-50deg, #0a5913, #5cc460);
  }
`

export default Button
