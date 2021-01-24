import React, { useContext } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { CoronaContext } from "../context/CoronaContext";

import PopupList from "./PopupList";

const customStyles = makeStyles(() => ({
  map: {
    height: "70vh",
  },
}));

function Map() {
  const classes = customStyles();
  const { state } = useContext(CoronaContext);

  const countries = state[0].countries;

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  const position = [0, 0];

  return (
    <MapContainer
      className={classes.map}
      center={position}
      zoom={3}
      doubleClickZoom={false}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {countries &&
        countries.map((country, i) => (
          <Marker
            key={i}
            icon={DefaultIcon}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <PopupList
                name={country.country}
                flag={country.countryInfo.flag}
                todayCases={country.todayCases}
                todayRecovered={country.todayRecovered}
                todayDeaths={country.todayDeaths}
                critical={country.critical}
              />
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default Map;
