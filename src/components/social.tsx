import styled from 'styled-components';

const Icon = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 1.25rem;
  transition: linear 0.25s;
  background-color: ${({ theme }) => theme.colors.light};

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

export default Icon
