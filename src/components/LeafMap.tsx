import React from 'react';
import '../styles/LeafMap.css'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LotMarker} from "../data/LotMarker";
import L from 'leaflet';

const list: LotMarker[] = [
    {
        LotName:"C-1",
        Location:"(East Campus)",
        lat:34.67258669321612,
        lon:-82.82889763605976,
    }
];
const icon: L.DivIcon = L.divIcon({
    className: "parking-icon",
    iconSize: [20,20],
    iconAnchor: [0,0],
    popupAnchor: [15,0],
});

const LeafMap = () => {
    return (
        <MapContainer center={[34.683437, -82.837364]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {
                list.map((item, index) => (
                    <Marker
                        icon={icon}
                        key={index}
                        position={[item.lat, item.lon]}
                        title={'${item.LotName} at ${item.Location}'}
                    >
                        <Popup>
                            <strong>
                            {item.LotName} at {item.Location}
                            </strong>
                        </Popup>
                    </Marker>
                ))
           }
            <Marker position={[34.683437, -82.837364]}>
                <Popup>
                    Clemson. <br /> Downtown.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafMap;