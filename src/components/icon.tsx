import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const iconNames = {
  ig: faInstagram,
  github: faGithub,
  email: faEnvelope
}

const IconWrapper = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  border-radius: 1.5rem;
  transition: linear 0.25s;
  background-color: ${({ theme }) => theme.colors.light};
  cursor: pointer;

  & > svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }

  &:hover, &:focus, &:active {
    background-color: ${({ theme }) => theme.colors.secondary};

    & > svg {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;

type Props = {
  to: string,
  iconName: 'ig' | 'github' | 'email'
}

const Icon = ({ to, iconName }: Props) => (
  <>
    <IconWrapper href={to} target="_blank">
      <FontAwesomeIcon icon={iconNames[iconName]} />
    </IconWrapper>
  </>
)


export default Icon
