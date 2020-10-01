import * as React from 'react'
import styled from 'styled-components'

const LabelWrapper = styled.div<{ type: string }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: ${({ type, theme }) => type == 'warning' ? theme.colors.selectionBg : '#F0D57A'};
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
`

const LabelTitle = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.6rem;
  margin: 0;
`

type Props = {
  children: React.ReactChild,
  type?: 'success' | 'warning' | 'danger'
}

const Label = ({ children, type = 'success' }: Props) => (
  <LabelWrapper type={type}>
    <LabelTitle>
      {children}
    </LabelTitle>
  </LabelWrapper>
)

export default Label
