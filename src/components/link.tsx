import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #fcf7d5;
  text-decoration: none;
  padding: 0 0.2rem;
  transition: ease-out .3s;

  &:hover {
    color: #303030;
    background-color:  #fcf7d5;
  }

  &:focus, &:active {
    border-bottom: 1px solid  #fcf7d5;
  }
`

type Props = {
  children: React.ReactNode;
  href: string;
  [x: string]: any;
}

const Link = ({ children, href,...props }: Props) => (
  <>
    <StyledLink href={href} {...props}>{ children }</StyledLink>
  </>
)

export default Link
