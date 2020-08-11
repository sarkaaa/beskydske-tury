import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const StyledLinkWrapper = styled.div<{ navLink?: boolean }>`
  position: relative;
  display: inline-block;
  margin: 0 0.1rem;
  overflow: hidden;
  vertical-align: bottom;
  z-index: 0;
  transition: ease-out .4s;

  ${({ navLink }) => navLink && css`
    padding: 0.25rem;
    
    & a {
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
      background-image: linear-gradient(-50deg, #0a5913, #5cc460);
      border-radius: 0;
      transform: translateY(calc(100% - 2px));
      transition: transform .25s ease-out;
      z-index: -1;
    }
  `}

  &:hover,
  &:focus {
    & a {
      color: ${({ navLink, theme }) => navLink ? theme.colors.light : theme.colors.primary};
      text-decoration: ${({ navLink }) => navLink ? 'none' : 'underline'};
      outline: none;
    }

    &::before {
      transform: translateY(0);
      transition: transform .25s ease-out;
      border-radius: 0.25rem;
    }
  }

  & a {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    line-height: 1;
    text-decoration: none;
    letter-spacing: 1px;
  }
`

type Props = {
  children: React.ReactNode;
  navLink?: boolean;
  [x: string]: any;
}

const StyledLink = ({ children, navLink = false, ...props }: Props) => (
  <>
    <StyledLinkWrapper navLink={navLink}>
      {
        props && props.to
        ? (
          <Link to={props.to} {...props}>{children}</Link>
        )
        : <a {...props}>{children}</a>
      }
    </StyledLinkWrapper>
  </>
)

export default StyledLink
