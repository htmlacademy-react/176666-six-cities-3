import {useEffect, useRef } from 'react';
import { City, Offers, IconProperties} from '../../types';
import useMap from '../../hooks/useMap';
import L from 'leaflet';
import PinActive from'/img/pin-active.svg';
import Pin from '/img/pin.svg';
const ICON_PROPERTIES: IconProperties = {
  iconAnchor: [20, 40],
  iconSize: [40, 40],
};
type MapProps = {
  offers: Offers;
  city: City;
  selectedCard?: string;
}

export default function Map ({city, offers, selectedCard}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const markersRef = useRef<L.Marker[]>([]);

  const defaultCustomIcon = L.icon({
    iconUrl: Pin,
    iconSize: ICON_PROPERTIES.iconSize,
    iconAnchor: ICON_PROPERTIES.iconAnchor,
  });
  const currentCustomIcon = L.icon({
    iconUrl: PinActive,
    iconSize: ICON_PROPERTIES.iconSize,
    iconAnchor: ICON_PROPERTIES.iconAnchor,
  });

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      offers.forEach((offer) => {
        const offerMarker = L.marker({
          lat: offer.coordinates.latitude,
          lng: offer.coordinates.longitude
        }, {
          icon: (offer.id === selectedCard) ? currentCustomIcon : defaultCustomIcon,
        }).addTo(map);

        markersRef.current.push(offerMarker);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, offers, selectedCard]);

  return (
    <div
      ref={mapRef}
      style={{height: '600px', width: `${100}%`}}
    >
    </div>
  );
}
