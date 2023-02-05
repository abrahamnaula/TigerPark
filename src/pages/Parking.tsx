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

/*rsc shortcut*/
const Parking = () => {
    const [parkingType, setParkingType] = useState(COMMUTER)
    const [lotId, setLotId] = useState<number | null>(null)

    const handleLots = (parkingType: string) => {
        return (
            <div className="lots-container">
                {parkingData[parkingType].map(
                    (lot: LotType, index: number) => {
                        return (
                            <>
                                <Lot onClick={() => setLotId(index+1)} lot={lot} />
                                <hr />
                            </>
                        )
                    }
                )}
            </div>
        )
    }

    return (
        <section className="parking">
            <div className="left-container">
                <nav className="menu-bar">
                    <h4 onClick={()=> {
                        setParkingType(COMMUTER)
                        setLotId(null)
                    }}>Commuter</h4>
                    <h4 onClick={()=> {
                        setParkingType(EMPLOYEE)
                        setLotId(null)
                    }}>Employee</h4>
                    <h4 onClick={()=> {
                        setParkingType(PARK_N_RIDE)
                        setLotId(null)
                    }}>Park n Ride</h4>
                </nav>
                <hr/>
                {
                    lotId?
                        <ParkingSpots name={parkingData[parkingType][lotId-1].name} spots={parkingData[parkingType][lotId-1].spots} />:
                        handleLots(parkingType)
                }
                {
                    lotId? <h4 onClick={() => setLotId(null)}>back to lots</h4> : ''
                }


            </div>
            <LeafMap />
            </section>

    );
};

export default Parking;