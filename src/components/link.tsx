import * as React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const StyledLinkWrapper = styled.span<{
  $navlink?: boolean
  $buttonlink?: boolean
}>(
  ({ theme, $navlink, $buttonlink }) => css`
    position: relative;
    display: inline-block;
    margin: 0 0.1rem;
    overflow: hidden;
    vertical-align: bottom;
    z-index: 0;
    transition: ease-out 0.4s;

    ${$navlink &&
    css`
      color: ${theme.colors.dark};
      padding: 0.25rem;

      & a {
        color: ${theme.colors.dark};

        padding: 0.25rem 0.3rem;
      }

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: -2px;
        background-image: linear-gradient(
          -50deg,
          theme.colors.primary,
          theme.colors.secondary
        );
        border-radius: 0;
        transform: translateY(calc(100% - 2px));
        transition: transform 0.25s ease-out;
        z-index: -1;
      }
    `}

    &:hover,
    &:focus {
      & a {
        color: ${theme.colors.primary};
        text-decoration: "none";
        outline: none;
        font-weight: 600;

        &::before {
          transform: scaleX(1);
          transition-delay: 0.25s;
        }

        &::after {
          transform: scaleX(0);
          transition-delay: 0s;
        }
      }

      &::before {
        transform: translateY(0);
        transition: transform 0.25s ease-out;
        border-radius: 0.25rem;
      }
    }

    & a {
      position: relative;
      color: ${theme.colors.secondary};
      font-family: "Noto Sans", sans-serif;
      font-weight: 400;
      line-height: 1;
      text-decoration: none;
      letter-spacing: 1px;
      font-weight: 600;
      transition: all 0.2s ease-in-out;

      &::before,
      &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: -0.1rem;
        display: block;
        width: 100%;
        height: 1px;
        background: ${theme.colors.secondary};
        transition: 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      }

      &::before {
        transform: scaleX(0);
        transform-origin: left;
      }

      &::after {
        transform-origin: right;
        transition-delay: 0.25s;
      }

      ${$buttonlink &&
      css`
        font-weight: 400;

        &::before,
        &::after {
          display: none;
        }

        &:hover {
          color: ${theme.colors.light};
          font-weight: 400;
          text-decoration: none;

          &::before,
          &::after {
            display: none;
          }
        }
      `}
    }
  `
)

type Props = {
  children: React.ReactNode
  navLink?: boolean
  buttonLink?: boolean
  [x: string]: any
}

const StyledLink = ({
  children,
  navLink = false,
  buttonLink = false,
  ...props
}: Props) => (
  <React.Fragment>
    <StyledLinkWrapper $navlink={navLink} $buttonlink={buttonLink}>
      {props && props.to ? (
        <Link to={props.to} {...props} data-cy="link">
          {children}
        </Link>
      ) : (
        <a {...props} data-cy="link">{children}</a>
      )}
    </StyledLinkWrapper>
  </React.Fragment>
)

export default StyledLink
