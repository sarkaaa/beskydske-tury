import * as React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const StyledButton = styled.button<{
  secondary?: boolean
  small?: boolean
  arrowRight?: boolean
}>(
  ({ theme, small, secondary, arrowRight }) => css`
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
    transition: all linear 0.2s;
    cursor: pointer;

    ${
      small &&
      css`
        padding: 0.45rem 1.25rem;
        font-size: ${({ theme }) => theme.sizes.sizeXS};
      `
    }

    ${
      secondary &&
      css`
        box-shadow: 2px 10rem 1px ${({ theme }) => theme.colors.light} inset;
        color: ${({ theme }) => theme.colors.primary};
      `
    }

    ${
      arrowRight &&
      css`
        padding-right: 3.5rem;
      `
    }

  /* &::after {
      position: absolute;
      content: "ABC";
      transition: transform 0.3s ease-out;
    } */

    &:hover {
      box-shadow: none;
      color: ${({ theme }) => theme.colors.light};
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        ${theme.colors.primary}, ${theme.colors.secondary};

      & > ${Icon} {
        transform: translateX(0.25rem);
      }
    }
  `
)

const Icon = styled(FontAwesomeIcon)(
  ({ theme }) => css`
    position: absolute;
    color: ${theme.colors.light};
    margin-left: 0.75rem;
    transition: transform ease-in-out 0.2s;
  `
)

type Props = {
  children: React.ReactNode
  arrowRight?: boolean
  [x: string]: any
}

const Button = ({ children, arrowRight = false, ...props }: Props) => (
  <StyledButton {...props} arrowRight={arrowRight}>
    {children}
    {arrowRight && <Icon icon={faArrowRight} />}
  </StyledButton>
)

export default Button
