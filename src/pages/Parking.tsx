import React, {useState} from 'react';
import '../styles/Parking.css'
import LeafMap from "../components/LeafMap";
import Lot, {LotProp} from "../components/Lot";
import commuterData from "../data/CommuterData";
import employeeData from "../data/EmployeeData";
import parkNRideData from "../data/ParkNRideData";
import ParkingSpots from "../components/ParkingSpots";
import {LotType} from "../data/LotType";

const COMMUTER = 'commuter'
const EMPLOYEE = 'employee'
const PARK_N_RIDE = 'parknride'

const parkingData: any = {
    'commuter': commuterData,
    'employee': employeeData,
    'parknride': parkNRideData
}

const handleLots = (parkingType: string) => {
    return (
        <div className="lots-container">
            {parkingData[parkingType].map(
                (lot: LotType) => {
                    return (
                        <>
                            <Lot lot={lot} />
                            <hr />
                        </>
                    )
                }
            )}
        </div>
    )
}



/*rsc shortcut*/
const Parking = () => {
    const [parkingType, setParkingType] = useState(COMMUTER)

    return (
        <section className="parking">
            <div className="left-container">
                <nav className="menu-bar">
                    <h4 onClick={()=>setParkingType(COMMUTER)}>Commuter</h4>
                    <h4 onClick={()=>setParkingType(EMPLOYEE)}>Employee</h4>
                    <h4 onClick={()=>setParkingType(PARK_N_RIDE)}>Park n Ride</h4>
                </nav>
                <hr/>
                {/*{ handleLots(parkingType) }*/}
                <ParkingSpots name='C-1' spots={commuterData[0].spots} />
            </div>
            <LeafMap />
            </section>

    );
};

export default Parking;