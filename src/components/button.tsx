import styled, { css } from "styled-components"

const Button = styled.button<{ secondary?: boolean; small?: boolean }>(
  ({ theme, small, secondary }) => css`
    color: ${theme.colors.light};
    font-size: ${theme.sizes.sizeS};
    font-family: "Noto Sans", sans-serif;
    text-decoration: none;
    border-radius: 3rem;
    border: solid 2px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        -50deg,
        ${theme.colors.primary},
        ${theme.colors.terciary},
        ${theme.colors.secondary}
      );
    background-origin: border-box;
    padding: 0.6rem 2.5rem;
    transition: linear 0.2s;
    cursor: pointer;

    ${small &&
    css`
      padding: 0.45rem 1.25rem;
      font-size: ${({ theme }) => theme.sizes.sizeXS};
    `}

    ${secondary &&
    css`
      box-shadow: 2px 10rem 1px ${({ theme }) => theme.colors.light} inset;
      color: ${({ theme }) => theme.colors.primary};
    `}
  
  &:hover {
      box-shadow: none;
      color: ${({ theme }) => theme.colors.light};
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        ${theme.colors.primary}, ${theme.colors.secondary};
    }
  `
)

export default Button
