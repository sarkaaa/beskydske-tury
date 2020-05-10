import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 4rem;
  line-height: 1.7;
  font-weight: 400;

  @media screen and (min-width: 420px) {
      font-size: 5rem;
  }
`

type Props = {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle = null}: Props) => (
  <Wrapper>
    <Title>
      {title}
    </Title>
    {
      subtitle && 
      <h2>
        {subtitle}
      </h2>
    }    
  </Wrapper>
)

export default Header
