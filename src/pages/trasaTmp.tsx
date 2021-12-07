import React, { useState, useCallback, useEffect } from "react"
import {
  getRouteInfo,
  RouteInfoResultProps,
} from "react-mapycz/lib/helperFunctions"
import SMapProvider from "react-mapycz/lib/SMapProvider"
import { graphql } from "gatsby"
import StyledLink from "../components/link"
import Layout from "../components/layout"
import { Icon } from "../components/icon"
import Container from "../components/container"
import {
  Map,
  MarkerLayer,
  CompassControl,
  PathMarker,
  Path,
  PathLayer,
  MouseControl,
  KeyboardControl,
  ZoomControl,
} from "react-mapycz"

import styled, { css } from "styled-components"
import SEO from "../components/seo"
import Header from "../components/header"

const colorDefaultValue = "#f00"
const pathDefaultValue = 3

const InfoWrapper = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: block;
    margin: 2rem 0;
    padding: 0 1rem;

    &:not(:last-of-type) {
      border-right: 1px solid ${theme.colors.primary};
    }
  `
)

const InfoTitle = styled.h4(
  ({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0.75rem 0;
  `
)

const BackLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const InfoContent = styled.div`
  display: flex;
  align-items: baseline;

  p {
    margin: 0.25rem 0;
  }
`

const Content = styled.p(
  ({ theme }) => css`
    display: block;
    color: ${theme.colors.dark};
    line-height: 1.7;
  `
)

const params = {
  geometry: true,
  itinerary: true,
  altitude: true,
  criterion: "turist2",
}

const TRAIL_TMP = {
  title: "Na Pustevny z Kunčic p. O. okolo Stolové",
  content:
    "Mírně delší a v určitých úsecích i mírně náročnější trasa na Pustevny malinko netradičně. Výchozí bod je parkoviště u restaurace Koliba v Kunčicích pod Ondřejníkem. Trasa vede okolo Stolové, kde jsou nádherné výhledy a pak přes Tanečnici na Pustevny. Z Pusteven se můžete dát ještě dál k Radegastovi a na vrchol Radhošť. Cesta zpět z Pusteven vede okolo vrcholu Čertův mlýn, kde je úsek s prudkým kopcem a pak okolo vrcholu Kněhyně, který patří k nejvyšším místum v moravskoslezských Beskydech..",
  criterion: "turist1",
  trail_type: "aa",
  coords: {
    lat1: 49.5220217,
    lng1: 18.3084428,
    lat2: 49.5187,
    lng2: 18.2879639,
    lat3: 49.5020256,
    lng3: 18.2902097,
    lat4: 49.4923217,
    lng4: 18.2671789,
    lat5: 49.4910969,
    lng5: 18.2753197,
    lat6: 49.5006922,
    lng6: 18.3106617,
    lat7: 49.5220217,
    lng7: 18.3084428,
    lat8: null,
    lng8: null,
    lat9: null,
    lng9: null,
    lat10: null,
    lng10: null,
    lat11: null,
    lng11: null,
    lat12: null,
    lng12: null,
  },
  availability_bus: null,
  availability_car: {
    parking1: "Parkoviště Koliba",
    parking2: null,
    parking3: null,
  },
  availability_train: null,
  cover_image: "/trails/2.jpeg",
}

const Trasa = () => {
  const {
    title,
    content,
    availability_car,
    availability_bus,
    availability_train,
    coords,
    trail_type,
    cover_image,
  } = TRAIL_TMP

  let mapCoords = []

  for (let i = 1; i <= Object.keys(coords).length / 2; i++) {
    coords[`lat` + i] &&
      mapCoords.push({
        lat: `${coords[`lat` + i]}`,
        lng: `${coords[`lng` + i]}`,
      })
  }

  const [routeInfo, setRouteInfo] = useState<null | RouteInfoResultProps>(null)

  const fetchRouteInfo = useCallback(async () => {
    const info = await getRouteInfo(mapCoords, params as any)
    setRouteInfo(info)
  }, [])

  try {
    useEffect(() => {
      fetchRouteInfo()
    }, [])
  } catch (err) {
    console.log(err)
  }

  return (
    <Layout>
      <SEO title={`${title} | Beskydské túry`} />
      <Header title={title} customBg={cover_image} />
      <Container>
        <BackLinkWrapper>
          <Icon iconName="arrowLeft" dark small />
          <StyledLink to="/trasy">Zpět na všechny trasy</StyledLink>
        </BackLinkWrapper>
        <Map height="60vh" center={mapCoords[2]}>
          <KeyboardControl />
          <ZoomControl />
          <MouseControl zoom={true} pan={true} wheel={true} />
          <CompassControl right={10} top={50} />
          <MarkerLayer>
            <PathMarker coords={mapCoords} />
          </MarkerLayer>
          <PathLayer>
            <Path
              coords={mapCoords}
              criterion="turist2"
              color={colorDefaultValue}
              width={pathDefaultValue}
              dynamicRoute
            />
          </PathLayer>
        </Map>
        <div>
          <div style={{ display: "flex" }}>
            <InfoWrapper>
              <InfoTitle>Délka trasy</InfoTitle>
              <InfoContent>
                <Icon iconName="mountain" dark small />

                <p>{(routeInfo?.length * 0.001).toFixed(2)} km</p>
              </InfoContent>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Stoupání</InfoTitle>
              <InfoContent>
                <Icon iconName="feets" dark small />
                <p>{routeInfo?.ascent} [m]</p>
              </InfoContent>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Dostupnost</InfoTitle>
              {availability_train && (
                <InfoContent>
                  <Icon iconName="train" dark small />
                  <div>
                    <p>{availability_train?.station1!}</p>
                    <p>{availability_train?.station2!}</p>
                    <p>{availability_train?.station3!}</p>
                  </div>
                </InfoContent>
              )}
              {availability_bus && (
                <InfoContent>
                  <Icon iconName="bus" dark small />
                  <div>
                    <p>{availability_bus?.stop1!}</p>
                    <p>{availability_bus?.stop2!}</p>
                    <p>{availability_bus?.stop3!}</p>
                  </div>
                </InfoContent>
              )}
              {availability_car && (
                <InfoContent>
                  <Icon iconName="car" dark small />
                  <div>
                    <p>{availability_car?.parking1!}</p>
                    <p>{availability_car?.parking2!}</p>
                    <p>{availability_car?.parking3!}</p>
                  </div>
                </InfoContent>
              )}
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Typ trasy</InfoTitle>
              <InfoContent>
                <Icon iconName="marker" dark small />
                <p>Z bodu A do bodu {trail_type === "aa" ? "A" : "B"}</p>
              </InfoContent>
            </InfoWrapper>
          </div>
          <Content>{content}</Content>
          <LinkWrapper>
            <StyledLink href={routeInfo?.url} target="_blank">
              Otevřít trasu v Mapy.cz
            </StyledLink>
          </LinkWrapper>
        </div>
      </Container>
    </Layout>
  )
}

export default SMapProvider(Trasa)
