import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Link as LinkBase } from "react-scroll"
import header from "../images/header.png"

const Wrapper = styled.div<{ homePage?: boolean; customBg?: string }>(
  ({ theme, homePage, customBg }) => css`
    position: relative;
    width: 100%;
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-image: url(${customBg || header});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 5px 13px ${homePage ? "#e0d0b3" : "#c5c5c5"};
    z-index: 0;

    @media ${theme.sizes.screenWidth.mobile} {
      min-height: ${homePage ? "750px" : "370px"};
    }

    ${customBg &&
    css`
      &:after {
        position: absolute;
        content: " ";
        width: 100%;
        height: 100%;
        background: #0e0e0e;
        opacity: 50%;
        z-index: 1;
      }
    `}
  `
)

const TitleContainer = styled.div`
  position: relative;
  max-width: 1240px;
  margin-top: 8rem;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  z-index: 2;
`

const Title = styled.h1<{ small?: boolean }>(
  ({ theme, small }) => css`
    text-align: center;
    margin-bottom: 0;

    ${small &&
    css`
      font-size: 3rem;
    `}
  `
)

const Subtitle = styled.h2(
  ({ theme }) => css`
    color: ${theme.colors.light};
    text-align: center;
  `
)

const Link = styled(LinkBase)(
  () => css`
    &:hover {
      cursor: pointer;
    }
  `
)

const Icon = styled(FontAwesomeIcon)(
  ({ theme }) => css`
    color: ${theme.colors.light};
    animation: bounce 2s infinite;
    font-size: ${theme.sizes.sizeL};
    padding-bottom: 1rem;

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-1rem);
      }
      60% {
        transform: translateY(-0.5rem);
      }
    }
  `
)

type Props = {
  title: string
  subtitle?: string
  customBg?: string
}

const Header = ({ title, subtitle = null, customBg }: Props) => (
  <Wrapper customBg={customBg} homePage={window.location.pathname === "/"}>
    <TitleContainer>
      <Title small={window.location.pathname !== "/"}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
    {window.location.pathname === "/" && (
      <Link
        activeClass="active"
        className="mainSection"
        to="mainSection"
        spy={true}
        smooth={true}
        duration={500}
      >
        <Icon icon={faChevronDown} />
      </Link>
    )}
  </Wrapper>
)

export default Header
