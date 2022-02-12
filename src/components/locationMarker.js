import { useMemo, useRef } from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";

const LocationMarker = ({ position, setPosition }) => {
  const markerRef = useRef(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return position === null ? null : (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span>Double Tap and Drag!</span>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
