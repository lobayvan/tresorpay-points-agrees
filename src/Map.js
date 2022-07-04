import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const pos = {
    lng: 5.3510144,
    lat: -3.997696
};

export default function Map({points}) {
  return (
      <MapContainer center={[pos.lng, pos.lat]} zoom={13} scrollWheelZoom={false}>
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
    </MapContainer>
  )
}
