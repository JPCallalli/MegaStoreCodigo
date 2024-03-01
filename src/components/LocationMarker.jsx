import { Marker, useMapEvents} from "react-leaflet";

export default function LocationMarker( {position, setPosition}) {

    const map = useMapEvents({
        click(e){
          console.log(e.latlng);
          setPosition(e.latlng)
          map.flyTo(e.latlng, map.getZoom())
        }
    })


  return (
    <>
      {position && <Marker position={position} />}
    </>
  )
}
