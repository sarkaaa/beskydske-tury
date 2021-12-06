import { useState, useCallback, useEffect } from 'react'
import {
  getRouteInfo,
  RouteInfoResultProps,
} from "../../node_modules/react-mapycz/lib/helperFunctions"

type RouteProps = {
  geometry?: boolean;
  itinerary?: boolean;
  altitude?: boolean;
}

type Props = {
  coords: Array<{ lat: number, lng: number }>
  criterion: 'turist1' | 'turist2'
}


const routeInfo = ({ coords, criterion }: Props) => {
  const params = {
    geometry: true,
    itinerary: true,
    altitude: true,
    criterion: criterion,
  }

  const [rInfo, setRInfo] = useState<null | RouteInfoResultProps>(null)

  const fetchRouteInfo = useCallback(async () => {
    const info = await getRouteInfo(coords, params as any)
    setRInfo(info)
  }, [])

  try {
    useEffect(() => {
      fetchRouteInfo()
    }, [])
  } catch (err) {
    console.log(err)
  }

  return rInfo
}

export default routeInfo;