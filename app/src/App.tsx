import "../../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
} from "react-leaflet";

function App() {
  const position = L.latLng(51.505, -0.09);

  let southWest = L.latLng(-90, -180),
    northEast = L.latLng(90, 180),
    mybounds = L.latLngBounds(southWest, northEast);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
      minZoom={2}
      maxBounds={mybounds}
      zoomSnap={0.5}
      attributionControl={false}
    >
      <LayerGroup>
        <TileLayer
          attribution="@tonyvx"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
        />
         <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}.png"
        />
      </LayerGroup>

      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
