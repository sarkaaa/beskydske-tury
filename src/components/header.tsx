import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
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
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.sizes.sizeXL};
  line-height: 1.2;
  font-weight: 900;

  @media screen and (min-width: 420px) {
      font-size: ${({ theme }) => theme.sizes.sizeXXL};
  }
`

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  font-family: 'Lato', sans-serif;
  line-height: 1;
  font-weight: 400;
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
      <SubTitle>
        {subtitle}
      </SubTitle>
    }    
  </Wrapper>
)

export default Header
