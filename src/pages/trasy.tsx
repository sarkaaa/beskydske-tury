import React from "react"
import styled, { css } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import TrailTile from '../components/trailTile'
import Header from '../components/header'
import Container from "../components/container";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 2fr;
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TrailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`


const Trasy = () => (
  <Layout>
    <SEO title="Trasy" />
    <Header title="Trasy" />
    <Container>
      <GridContainer>
        <div>
          <h3>
            Filtrování
          </h3>
          <form>
            <h4>
              Délka
            </h4>
            <CheckboxWrapper>
              <label>
                <input type="checkbox" name="short" />
                Kratka (do 15km)
              </label>
              <label>
                <input type="checkbox" name="medium" />
                Stredne dlouha (15 - 30 km)
              </label>
              <label>
                <input type="checkbox" name="long" />
                Dlouha (30 km +)
              </label>
            </CheckboxWrapper>
            <h4>Náročnost</h4>
            <CheckboxWrapper>
              <label>
                <input type="checkbox" name="short" />
                Kratka (do 15km)
              </label>
              <label>
                <input type="checkbox" name="medium" />
                Stredne dlouha (15 - 30 km)
              </label>
              <label>
                <input type="checkbox" name="long" />
                Dlouha (30 km +)
              </label>
            </CheckboxWrapper>
            <h4>Dostupnost</h4>
            <CheckboxWrapper>
              <label>
                <input type="checkbox" name="train" />
                Vlak
              </label>
              <label>
                <input type="checkbox" name="bus" />
                Autobus
              </label>
              <label>
                <input type="checkbox" name="car" />
                Auto
              </label>
            </CheckboxWrapper>
            <h4>Typ trasy</h4>
            <CheckboxWrapper>
              <label>
                <input type="checkbox" name="fromAtoA" />
                Z bodu A do bodu A
              </label>
              <label>
                <input type="checkbox" name="fromAtoB" />
                Z bodu A do bodu B
              </label>
            </CheckboxWrapper>
            <input type="submit" value="Potvrdit vyber" />
          </form>
        </div>
        <TrailsWrapper>
          <TrailTile />
          <TrailTile />
          <TrailTile />
          <TrailTile />
        </TrailsWrapper>
      </GridContainer>
    </Container>
  </Layout>
)

export default Trasy
