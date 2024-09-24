import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChillOut from "../layouts/Pages/ChillOut";

type AirBnB = {
  id: number;
  name: string;
  hab: number;
  price: number;
  subTotal: number;
};

type Chillout = {
  id: number;
  name: string;
  price: number;
};

type TaxiRoute = {
  start: string;
  end: string;
  price: number;
  routeDateStart: string;
  routeDateEnd: string;
  days: number;
};

type StartTrip = {
  tripStart: string;
  tripEnd: string;
  tripDays: number;
};

type Destination = {
  id: number;
  routeStart: string;
  routeEnd: string;
  routeDateStart: string;
  routeDateEnd: string;
  days: number;
  taxi: number;
  AirBnBs: AirBnB[];
  ChillOuts: Chillout[];
};
type RoutesState = {
  clientId: number;
  dateStart: string;
  dateEnd: string;
  tripDays: number;
  total: number;
  destination: Destination;
  destinations: Destination[];
};

// const calculateDays = (day1: string, day2:string) => {
//         const dateStart = new Date(day1);
//         const dateEnd = new Date(day2);
//         // let Result = dateEnd - dateStart
//         let one_day = 1000 * 60 * 60 * 24;
//         let Result = Math.round((dateEnd.getTime() -
//         dateStart.getTime())/one_day);
//         return Result;
// }

const initialState: RoutesState = {
  clientId: 0,
  dateStart: new Date().toISOString(),
  dateEnd: new Date().toISOString(),
  tripDays: 0,
  total: 0,
  destination: {
    id: 0,
    routeStart: "",
    routeEnd: "",
    routeDateStart: new Date().toISOString(),
    routeDateEnd: new Date().toISOString(),
    days: 0,
    taxi: 0,
    AirBnBs: [],
    ChillOuts: [],
  },
  destinations: [],
};

export const filteredRoutesSlice = createSlice({
  name: "filteredRoutes",
  initialState,
  reducers: {
    addStartTrip: (state, action: PayloadAction<StartTrip>) => {
      state.clientId = Number(new Date());
      state.dateStart = action.payload.tripStart;
      state.dateEnd = action.payload.tripEnd;
      state.tripDays = action.payload.tripDays;
    },
    addTaxiRoute: (state, action: PayloadAction<TaxiRoute>) => {
      state.destination.id++;
      state.destination.routeStart = action.payload.start;
      state.destination.routeEnd = action.payload.end;
      state.destination.routeDateStart = action.payload.routeDateStart;
      state.destination.routeDateEnd = action.payload.routeDateEnd;
      state.destination.days = action.payload.days;
      state.destination.taxi = action.payload.price;
      state.destinations.push(state.destination);
    },
  },
});

export const { addStartTrip, addTaxiRoute } = filteredRoutesSlice.actions;

export default filteredRoutesSlice.reducer;
