import React, { useState, useCallback, useEffect } from "react"
import {
  getRouteInfo,
  RouteInfoResultProps,
} from "../../node_modules/react-mapycz/lib/helperFunctions"
import SMapProvider from "../../node_modules/react-mapycz/lib/SMapProvider"
import StyledLink from "../components/link"
import Layout from "../components/layout"
import Container from "../components/container"
import {
  Map,
  MarkerLayer,
  Marker,
  CompassControl,
  PathMarker,
  Path,
  PathLayer,
  MouseControl,
  KeyboardControl,
  ZoomControl,
} from "react-mapycz"

import styled from "styled-components"

const colorDefaultValue = "#f00"
const pathDefaultValue = 3

const Wrap = styled.div`
  height: 380px;
`

const coords = [
  { lat: 49.5329453, lng: 18.5110686 },
  { lat: 49.5440406, lng: 18.4509133 },
  { lat: 49.5457367, lng: 18.4479764 },
]

const params = {
  geometry: true,
  itinerary: true,
  altitude: true,
  criterion: "turist2",
}

const Trasa = () => {
  const [routeInfo, setRouteInfo] = useState<null | RouteInfoResultProps>(null)

  const fetchRouteInfo = useCallback(async () => {
    const info = await getRouteInfo(coords, params as any)
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
      <Container>
        <p>Hello workd</p>
        <Map height="90vh" center={{ lat: 49.536, lng: 18.499 }}>
          <KeyboardControl />
          <ZoomControl />
          <MouseControl zoom={true} pan={true} wheel={true} />
          <CompassControl right={10} top={50} />
          <MarkerLayer>
            <PathMarker coords={coords} />
          </MarkerLayer>
          <PathLayer>
            <Path
              coords={coords}
              criterion="turist1"
              color={colorDefaultValue}
              width={pathDefaultValue}
              dynamicRoute
            />
          </PathLayer>
        </Map>
        <div>
          <h2>Z Papežova na Lysou horu</h2>
          <div>
            <div>
              <h4>Délka trasy</h4>
              <p>8,2 km</p>
            </div>
            <div>
              <h4>Náročnost</h4>
              <p>Mírně náročná</p>
            </div>
            <div>
              <h4>Dostupnost</h4>
              <p>Auto</p>
              <p>Bus: Zastávka Papežov</p>
            </div>
            <div>
              <h4>Typ trasy</h4>
              <p>Z bodu A do bodu A</p>
            </div>
          </div>
          <p>
            Laboris nostrud cupidatat et eiusmod id eiusmod amet non sint elit
            velit tempor esse laboris. Mollit magna in amet ea ipsum quis. Sint
            ad adipisicing consectetur amet eu qui in. Laboris et nulla irure
            sint minim aliquip adipisicing commodo laborum amet voluptate elit.
            Ullamco labore aliqua excepteur dolore cillum mollit elit nostrud
            reprehenderit veniam est Lorem quis.
          </p>
          <div>
            <p>fotky pokud jsou</p>
          </div>
          <div>
            <StyledLink href={routeInfo?.url} target="_blank">
              Otevřít trasu v Mapy.cz
            </StyledLink>
          </div>
        </div>
        <div>
          <h2>Další trasy</h2>
          <p>dalsi trasy</p>
        </div>
        <p>Id: {routeInfo?.id}</p>
        <p>Descent: {routeInfo?.descent} [m]</p>
        <p>Ascent: {routeInfo?.ascent} [m]</p>
      </Container>
    </Layout>
  )
}

export default SMapProvider(Trasa)
