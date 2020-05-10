import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1;
  text-decoration: none;
  padding: 4px 0.3rem;
  margin: 0 0.1rem;
  overflow: hidden;
  vertical-align: bottom;
  z-index: 0;
  transition: ease-out .4s;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: -2px;
    background-image: linear-gradient(-50deg, #0a5913, #5cc460);
    border-radius: 0.25rem;
    transform: translateY(calc(100% - 2px));
    transition: transform .25s ease-out;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.light};

    &::before {
      transform: translateY(0);
      transition: transform .25s ease-out;
    }
  }
`

type Props = {
  children: React.ReactNode;
  href: string;
  [x: string]: any;
}

const Link = ({ children, href,...props }: Props) => (
  <>
    <StyledLink href={href} {...props}>{children}</StyledLink>
  </>
)

export default Link
