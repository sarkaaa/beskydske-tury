import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faMountain,
  faMapMarkerAlt,
  faCarSide,
  faBus,
  faTrain,
  faArrowRight,
  faArrowLeft,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons"
import styled, { css } from "styled-components"

const iconNames = {
  ig: faInstagram,
  github: faGithub,
  email: faEnvelope,
  mountain: faMountain,
  marker: faMapMarkerAlt,
  car: faCarSide,
  bus: faBus,
  train: faTrain,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  feets: faShoePrints,
}

const IconWrapper = styled.div<{ dark?: boolean; small?: boolean }>(
  ({ theme, dark, small }) => css`
    margin: 0 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      color: ${dark ? theme.colors.dark : theme.colors.light};
      font-size: ${small ? "1rem" : "1.5rem"};
    }
  `
)

const LinkedIconWrapper = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  border-radius: 1.5rem;
  transition: linear 0.25s;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  & > svg {
    color: ${({ theme }) => theme.colors.light};
    font-size: 1.25rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};

    & > svg {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`

type Props = {
  iconName:
    | "ig"
    | "github"
    | "email"
    | "mountain"
    | "marker"
    | "car"
    | "bus"
    | "train"
    | "arrowRight"
    | "arrowLeft"
    | "feets"
  dark?: boolean
  small?: boolean
}

export const Icon = ({ iconName, dark = false, small = false }: Props) => (
  <>
    <IconWrapper dark={dark} small={small}>
      <FontAwesomeIcon icon={iconNames[iconName]} />
    </IconWrapper>
  </>
)

export const LinkedIcon = ({ to, iconName }: { to: string } & Props) => (
  <>
    <LinkedIconWrapper href={to} target="_blank">
      <FontAwesomeIcon icon={iconNames[iconName]} />
    </LinkedIconWrapper>
  </>
)
