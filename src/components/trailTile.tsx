import * as React from 'react'
import styled from 'styled-components'
import Button from './button'
import Label from './label'

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  background: ${({ theme }) => theme.colors.primary};
`

const TrailTile = () => (
  <div>
    <div>
      <ImageWrapper>
        <Label>
          Stredne dlouha
        </Label>
      </ImageWrapper>
      <h4>
        Lorem ipsum
      </h4>
      <p>
      Soufflé candy liquorice carrot cake pudding halvah. Donut sugar plum lemon drops lemon drops toffee. Lemon drops jelly beans cotton candy caramels pastry
      </p>
      <ul>
        <li>
          Delka:
        </li>
        <li>
          Narocnost:
        </li>
        <li>
          Dostupnost:
        </li>
        <li>
          Typ:
        </li>
      </ul>
      <Button onClick={() => {}} secondary small>Detail</Button>
    </div>

  </div>
)

export default TrailTile
