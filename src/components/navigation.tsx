import React from "react"
import styled from "styled-components"
import StyledLink from "./link"

const Categories = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  & li {
    float: left;
    margin: 0 0.5rem;
  }

  & li a {
    text-transform: uppercase;
  }
`

type Props = {
  categories: any
}

const Navigation = ({ categories }: Props) => (
  <Categories>
    {categories.map(({ title, to }) => (
      <li key={title} data-cy="navLink">
        <StyledLink to={to} navLink>
          {title}
        </StyledLink>
      </li>
    ))}
  </Categories>
)

export default Navigation
