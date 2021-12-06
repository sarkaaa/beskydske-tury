import * as React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Icon } from "./icon"
import routeInfo from "../helpers/routeInfo"
import SMapProvider from "../../node_modules/react-mapycz/lib/SMapProvider"

const TileWrapper = styled.button<{ bg: string }>(
  ({ theme, bg }) => css`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 550px;
    border-radius: 15px;
    background-image: url(${bg});
    background-size: cover;
    text-decoration: none;
    border: 0;
    outline: 0;
    transition: all 0.2s ease-in-out;

    &:before {
      position: absolute;
      content: " ";
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0.85) 100%
      );
      z-index: 1;
      border-radius: 15px;
      transition: all 0.7s ease-in-out;
    }

    &:hover,
    &:focus {
      > div {
        opacity: 0.15;
      }

      > span {
        color: ${theme.colors.dark};
        transition-delay: 0.5s;

        :before {
          transition-delay: 0s;
        }

        :after {
          background: ${theme.colors.light};
          transition-delay: 0.35s;
        }

        :before,
        :after {
          height: 100%;
        }
      }

      &:before {
        background: rgba(0, 0, 0, 0.85);
      }
    }
  `
)

const TileContent = styled.div`
  position: relative;
  padding: 1.5rem;
  z-index: 2;
  transition: all 0.7s ease-in-out;
`

const Title = styled.h3(
  ({ theme }) => css`
    color: ${theme.colors.light};
    font-size: 1.8rem;
    font-weight: 500;
    text-decoration: none;
    text-align: left;
    line-height: 1.5;
    margin: 0;
  `
)

const TileButton = styled.span(
  ({ theme }) => css`
    position: absolute;
    bottom: 45%;
    color: transparent;
    font-family: "Noto Sans", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 6px;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 2rem;
    margin: auto;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 3;

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: inherit;
      z-index: -1;
      left: 0;
      height: 0;
      width: 100%;
    }

    &:before {
      top: 0;
      left: -1px;
      border: 1px solid ${theme.colors.light};
      border-top: 0;
      border-bottom: 0;
    }

    &:after {
      bottom: 0;
      height: 0;
    }
  `
)

const InfoText = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.light};
    font-size: ${theme.sizes.sizeM};
    font-weight: 500;
    text-decoration: none;
    text-align: left;
    line-height: 1;
    margin: 0 0.5rem;
  `
)

const TrailInfo = styled.div`
  display: block;
  margin-top: 2rem;
`

const TrailTypeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.25rem;
`

const TrailLengthAvailabityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const TrailLengthAvailabilityContent = styled.div`
  display: flex;
  align-items: flex-end;
`

type TileProps = {
  id: number
  title: string
  availability_car: {
    parking1: string | null
    parking2: string | null
    parking3: string | null
  } | null
  availability_bus: {
    stop1: string
    stop2: string
    stop3: string
  } | null
  availability_train: {
    station1: string
    station2: string
    station3: string
  } | null
  coords: any
  trail_type: "aa" | "ab"
  cover_image: any
}

type Props = {
  trail: TileProps
}

const TrailTile = ({ trail }: Props) => {
  const {
    id,
    title,
    availability_car,
    availability_bus,
    availability_train,
    coords,
    trail_type,
    cover_image,
  } = trail

  let mapCoords = []

  if (coords) {
    for (let i = 1; i <= Object.keys(coords).length / 2; i++) {
      coords[`lat` + i] &&
        mapCoords.push({
          lat: `${coords[`lat` + i]}`,
          lng: `${coords[`lng` + i]}`,
        })
    }
  }

  const routeResult = routeInfo({ coords: mapCoords, criterion: "turist1" })

  return (
    <TileWrapper
      bg={cover_image.localFile.childImageSharp.fluid.src}
      as={Link}
      to={`/${id}`}
    >
      <TileContent>
        <Title>{title}</Title>
        <TrailInfo>
          <TrailTypeWrapper>
            <Icon iconName="marker" />
            <InfoText>A</InfoText>
            <Icon iconName="arrowRight" />
            <InfoText>{trail_type === "aa" ? "A" : "B"}</InfoText>
          </TrailTypeWrapper>
          <TrailLengthAvailabityWrapper>
            <TrailLengthAvailabilityContent>
              <Icon iconName="mountain" />
              <InfoText>{(routeResult?.length * 0.001).toFixed(2)} km</InfoText>
            </TrailLengthAvailabilityContent>
            <TrailLengthAvailabilityContent>
              {availability_train && <Icon iconName="train" />}
              {availability_bus && <Icon iconName="bus" />}
              {availability_car && <Icon iconName="car" />}
            </TrailLengthAvailabilityContent>
          </TrailLengthAvailabityWrapper>
        </TrailInfo>
      </TileContent>
      <TileButton>Detail</TileButton>
    </TileWrapper>
  )
}

export default SMapProvider(TrailTile)
