import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: '600px',
    width: '400px',
  };

  const defaultCenter = {
    lat: 3.4516,
    lng: -76.5320,
    radius: 5000,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCw4bDjGyuWisK1yX9kgqhfP5yWaDw3F8A">
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={10}
      />
    </LoadScript>
  );
};

export default MapComponent;

