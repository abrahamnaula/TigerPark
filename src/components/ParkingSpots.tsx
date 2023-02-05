import React from 'react';
import {Grid} from "@mui/material";
import '../styles/ParkingSpots.css'
import {Spot} from "../data/LotType";
import axios from "axios";


interface ParkingSpotsProp {
    name: string
    spots: Spot[]
    fetchData: () => any
}

const ParkingSpots = ({ name, spots, fetchData } : ParkingSpotsProp) => {
    async function reserveSpot(name: string, spot: number) {
        await axios.post('http://198.21.156.104:3000/lots/reserve', {
            name: name,
            spot: spot
        })
        await fetchData()
    }
    return (
        <div className='parking-spots'>
            <h3>{name}</h3>
            <Grid container columns={10} >
                {spots.map((spot) =>
                    <Grid item xs={1}>
                        <div
                            className="parking-spot"
                            style={{background: spot.isAvailable ? '#87e897': '#e89987'}}
                            onClick={() => reserveSpot(name, spot.id)}>
                            spot {spot.id} </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default ParkingSpots;
