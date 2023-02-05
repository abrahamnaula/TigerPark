import {getSpots, LotType} from "./LotType";

const commuterData: LotType[] = [
    {
        name: 'C-1',
        address: '6661 dog street',
        open: 100,
        capacity: 500,
        spots: getSpots()
    },

]

export default commuterData;