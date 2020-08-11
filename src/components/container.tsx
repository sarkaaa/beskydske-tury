import styled from 'styled-components'

const Container = styled.div`
  width: auto;
  margin: 0 auto;
  padding: 1rem;

  @media ${({ theme }) => theme.sizes.screenWidth.mobile} {
    width: 540px;
  }

  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    width: 720px;
  }

  @media ${({ theme }) => theme.sizes.screenWidth.desktopLG} {
    width: 960px;
  }

  @media ${({ theme }) => theme.sizes.screenWidth.desktopXL} {
    width: 1140px;
  }
`
export default Container
