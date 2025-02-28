import React, { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.initMap = () => {
          const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 46.4825, lng: 30.7326 }, // Одесса
            zoom: 15,
          });

          new window.google.maps.Marker({
            position: { lat: 55.7558, lng: 37.6173 },
            map,
            title: "Ты здесь!",
          });
        };
      };
    };

    if (!window.google) {
      loadGoogleMaps();
    } else {
      window.initMap();
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Map Page</h1>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default MapPage;
