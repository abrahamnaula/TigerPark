import React from 'react';
import '../styles/LeafMap.css'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LotMarker} from "../data/LotMarker";

const LeafMap = () => {
    return (
        <MapContainer center={[34.683437, -82.837364]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           
            <Marker position={[34.683437, -82.837364]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafMap;