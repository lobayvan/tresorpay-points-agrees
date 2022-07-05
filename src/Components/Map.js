import React from 'react';
import {useSelector} from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const pos = {
    lng: 5.3510144,
    lat: -3.997696
};


const MapShowPoint = ({point}) => {
  const map = useMap();
  console.log('map center:', map.getCenter());
  console.log('point:', point);

  if(point) {
    map.flyTo(point.coords, 17.5)
  }

  return null
}

export default function Map({points}) {

  const {selectedPoint} = useSelector((state) => state.points);

  return (
    <div className="map">
      <MapContainer center={[...points[0].coords]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {points && points.map((item, index) => <Marker position={[...item.coords]}>
              <Popup>
                {item.situation} <br />
                {item.contact}
              </Popup>
          </Marker>)}

          <MapShowPoint point={selectedPoint} />
      </MapContainer>
    </div>
  )
}
