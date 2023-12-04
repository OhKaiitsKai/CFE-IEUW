import React, { useState, useEffect } from 'react';

const CfeFinder = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestCfe, setNearestCfe] = useState(null);
  const [map, setMap] = useState(null); // Estado para almacenar la referencia al mapa

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          alert('Error al obtener la ubicación: ' + error.message);
        }
      );
    } else {
      alert('La geolocalización no está disponible en este navegador.');
    }
  };

  const initMap = () => {
    if (userLocation) {
      const mapOptions = {
        center: { lat: userLocation.latitude, lng: userLocation.longitude },
        zoom: 12, // Ajusta el nivel de zoom según lo necesites
      };

      const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      setMap(newMap);
    }
  };

  const findNearestCfe = () => {
    if (!userLocation) {
      alert('Por favor, permite el acceso a tu ubicación para encontrar el CFE más cercano.');
      return;
    }

    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    service.nearbySearch(
      {
        location: new window.google.maps.LatLng(userLocation.latitude, userLocation.longitude),
        radius: 5000, // Radio de búsqueda en metros
        keyword: 'CFE', // Palabra clave para buscar CFE
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
          const nearest = results[0];
          const cfeDetails = {
            name: nearest.name,
            latitude: nearest.geometry.location.lat(),
            longitude: nearest.geometry.location.lng(),
          };

          const distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            cfeDetails.latitude,
            cfeDetails.longitude
          );

          cfeDetails.distance = distance + ' km';
          setNearestCfe(cfeDetails);

          if (map) {
            const marker = new window.google.maps.Marker({
              position: { lat: cfeDetails.latitude, lng: cfeDetails.longitude },
              map: map,
              title: cfeDetails.name,
            });
          }
        } else {
          alert('No se encontraron ubicaciones de CFE cercanas.');
        }
      }
    );
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  useEffect(() => {
    if (userLocation) {
      initMap();
    }
  }, [userLocation]);

  return (
    <div className='Mapita'>
      <h1 className='Encuentra'>Encuentra tu CFE más cercano</h1>
      {userLocation ? (
        <>
          <button className="Encontrar"onClick={findNearestCfe}>Buscar CFE cercano</button>
          <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>
        </>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}

      {nearestCfe && (
        <div className='DatosMapa'>
          <h2 className='CFEcerca'>CFE más cercano:</h2>
          <p className='NombreCFE'>Nombre: {nearestCfe.name}</p>
          <p className='DistanciaCFE'>Distancia: {nearestCfe.distance}</p>
        </div>
      )}
    </div>
  );
};

export default CfeFinder;


