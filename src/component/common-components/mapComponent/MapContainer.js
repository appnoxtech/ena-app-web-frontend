import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import io from 'socket.io-client';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './MapContainer.css';
import { hostname } from "../../../GlobalVariable";
import { GetRiderDetailsById } from "../../../services/rider/RiderService";

const socket = io(hostname);

export default function MapContainer({ agentId }) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [location, setLocation] = useState({});
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAtJy10hcuCv7AhN6Bxw_Z2OwDSE5-_eHY',
  });

  const getSelectedRiderDetails = async (id) => {
    try {
      const res = await GetRiderDetailsById(id);
      console.log('rider details', res.data);
      const data = res.data.data;
      if (data.currentLocation) {
        const { lat, lng } = data.currentLocation;
        setLocation({ lat, lng });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getSelectedRiderDetails(agentId);
    socket.on('connect', () => {
      console.log('Socket is Connected ====>');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.emit('join_room', agentId);

    socket.on('LOCATION_CHANGED', (data) => {
      try {
        console.log('Location Data', { ...data });
        if (data) {
          //setOrder(data);
          const location = data.currentLocation;
          console.log('location', location);
          setLocation(location);
        }
      } catch (error) {
        console.error('Socket Error', error);
      }
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('LOCATION_CHANGED');
      socket.off('join_room');
  };
  }, []);

  if (!isLoaded && !Object.keys(location).length) return <div>Loading...</div>;
  return <Map location={location} />;
}



function Map({ location }) {
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