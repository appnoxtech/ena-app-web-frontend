import React, { useEffect, useState } from "react";  
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './MapContainer.css';

export default function MapContainer({location}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAtJy10hcuCv7AhN6Bxw_Z2OwDSE5-_eHY',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map location={location} />;
}

function Map({location}) {
  console.log('center', location);
  const option = useMemo(() => ({
    disableDefaultUI: true,
      clickableIcons: false,
  }), []);

  return (
    <GoogleMap
     zoom={30} 
     center={location} 
     mapContainerClassName="map-container"
     options={option}
    >
      <MarkerF 
       position={location} 
       visible={true}
     />
    </GoogleMap>
  );
}