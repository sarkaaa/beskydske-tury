import * as React from "react"
import styled, { css } from "styled-components"
import { darken, lighten } from "polished"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const StyledButton = styled.button<{
  buttonType?: "primary" | "secondary" | "dark"
  small?: boolean
  arrowright?: boolean
}>(
  ({ theme, small, buttonType = "primary", arrowright }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.sizeS};
    font-family: "Noto Sans", sans-serif;
    text-decoration: none;
    border-radius: 3rem;
    border: solid 2px transparent;
    background-image: linear-gradient(
      to right,
      ${buttonType === "secondary" ? theme.colors.red : theme.colors.primary},
        ${
          buttonType === "secondary"
            ? lighten(0.1, theme.colors.red)
            : theme.colors.secondary
        }
    );
    background-origin: border-box;
    /* padding: 0.6rem 2.5rem; */
    padding: 2px;
    transition: all linear 0.2s;
    cursor: pointer;
    position: relative;
    height: 60px;
    display: flex;
    box-sizing: border-box;

    ${
      small &&
      css`
        padding: 0.45rem 1.25rem;
        font-size: ${({ theme }) => theme.sizes.sizeXS};
      `
    }

    & ${Icon} {
      background: transparent;
    }

    &:hover,
    &:focus {
      box-shadow: none;
      color: ${({ theme }) => theme.colors.light};
      background-image: linear-gradient(
        to right,
        ${buttonType === "secondary" ? theme.colors.red : theme.colors.primary},
        ${
          buttonType === "secondary"
            ? lighten(0.1, theme.colors.red)
            : theme.colors.secondary
        }
      );

      & ${Icon} {
        color: ${theme.colors.light};
        background: transparent;
        transform: translateX(0.25rem);
      }

      & span {
        background: transparent;
      }
    }

    & span {
      background: ${
        buttonType === "secondary" ? theme.colors.sand : theme.colors.light
      };
      border-radius: 3rem;
      transition: background 0.5s ease;
      box-sizing: border-box;
      padding-top: 1.05rem;
      padding-left: 1rem;
      padding-right: 1rem;

      ${
        arrowright &&
        css`
          & {
            padding-right: 2.75rem;
          }
        `
      }
    }

    ${
      buttonType === "dark" &&
      css`
        background-image: linear-gradient(
          to right,
          ${theme.colors.light},
          ${darken(0.05, theme.colors.light)}
        );

        & span {
          color: ${theme.colors.light};
          background: ${theme.colors.primary};
        }

        ${Icon} {
          color: ${theme.colors.light};
          background: transparent;
        }

        &:hover,
        &:focus {
          box-shadow: none;
          color: ${({ theme }) => theme.colors.light};
          background-image: linear-gradient(
            to right,
            ${theme.colors.light},
            ${darken(0.05, theme.colors.light)}
          );

          & ${Icon} {
            color: ${theme.colors.primary};
          }

          & span {
            color: ${theme.colors.primary};
          }
        }
      `
    }
  `
)

const Icon = styled(FontAwesomeIcon)(
  ({ theme }) => css`
    position: absolute;
    color: ${theme.colors.primary};
    margin-left: 0.75rem;
    transition: transform ease-in-out 0.2s;
  `
)

type Props = {
  children: React.ReactNode
  arrowright?: boolean
  [x: string]: any
}

const Button = ({ children, arrowright = false, ...props }: Props) => (
  <StyledButton {...props} arrowright={arrowright}>
    <span>
      {children}
      {arrowright && <Icon icon={faArrowRight} />}
    </span>
  </StyledButton>
)

export default Button
