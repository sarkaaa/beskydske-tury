import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

const MenuStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    right: 0,
    top: 0
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '40px',
    width: '40px',
    right: '30px',
    top: '20px'
  },
  bmCross: {
    height: '45px',
    background: '#000'
  },
  bmMenuWrap: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
  },
  bmMenu: {
    background: '#fafafa',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#b8b7ad',
    marginTop: '8rem',
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.9)'
  }
}

const NavigationLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colors.dark};
  font-family: 'Noto Sans', sans-serif;
  font-size: ${({ theme }) => theme.sizes.sizeL};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.4;
  margin: 2rem 0;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`

type Props = {
  categories: any
}

const MobileNavigation = ({ categories }: Props) => (
  <Menu styles={MenuStyles} right>
    {
      categories.map(({ title, to }) => (
        <NavigationLink to={to}>{title}</NavigationLink>
      ))
    }
  </Menu>
)

export default MobileNavigation
