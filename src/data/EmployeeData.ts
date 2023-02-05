import { LotProp } from "../components/Lot";
import {getSpots, LotType} from "./LotType";

const employeeData: LotType[] = [
    {
        name: 'E-1',
        address: '6661 dog street',
        open: 100,
        capacity: 500,
        spots: getSpots()
    },
]

export default employeeData;