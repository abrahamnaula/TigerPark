import React from 'react';
import {Grid} from "@mui/material";
import '../styles/ParkingSpots.css'
import {Spot} from "../data/LotType";




interface ParkingSpotsProp {
    name: string
    spots: Spot[]
}

const ParkingSpots = ({ name, spots } : ParkingSpotsProp) => {
    return (
        <div className='parking-spots'>
            <h3>{name}</h3>
            <Grid container columns={10} >
                {spots.map((spot) =>
                    <Grid item xs={1}>
                        <div
                            className="parking-spot"
                            style={{background: spot.isAvailable ? 'green': 'red'}}>
                            spot {spot.id} </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default ParkingSpots;
