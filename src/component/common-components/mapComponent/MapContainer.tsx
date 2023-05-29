import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import io from 'socket.io-client';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './MapContainer.css';
import { hostname } from "../../../GlobalVariable";
import { GetRiderDetailsById } from "../../../services/rider/RiderService";
import useErrorHandler from "../../../services/handler/ErrorHandler";

const socket = io(hostname);

const MapContainer: React.FC<any> = ({ agentId }) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const showError = useErrorHandler()
  const [location, setLocation] = useState({});
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAtJy10hcuCv7AhN6Bxw_Z2OwDSE5-_eHY',
  });

  const getSelectedRiderDetails = async (id: string) => {
    try {
      const res = await GetRiderDetailsById(id);
      const data = res.data.data;
      if (data.currentLocation) {
        const { lat, lng } = data.currentLocation;
        setLocation({ lat, lng });
      }
    } catch (error) {
      showError(error);
    }
  }

  useEffect(() => {
    getSelectedRiderDetails(agentId);
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.emit('join_room', agentId);

    socket.on('LOCATION_CHANGED', (data) => {
      try {
       // console.log('Location Data', { ...data });
        if (data) {
          //setOrder(data);
          const location = data.currentLocation;
          setLocation(location);
        }
      } catch (error) {
        showError(error)
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
  if(typeof google === "undefined"){
    return (
      <div className="">
         Loading ....
      </div>
    )
  }
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

export default MapContainer;