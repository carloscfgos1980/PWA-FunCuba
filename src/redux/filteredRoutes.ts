import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AirBnB = {
  id: string;
  name: string | undefined;
  hab: number;
  price: number;
  subTotal: number;
};

export type ChillOut = {
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  dateChill: string;
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
  totalAir: number | undefined;
  totaChill: number | undefined;
  AirBnBs: AirBnB[];
  ChillOuts: ChillOut[];
};
type RoutesState = {
  clientId: number;
  dateStart: string;
  dateEnd: string;
  tripDays: number;
  total: number;
  destination: Destination;
  airBnB: AirBnB;
  chillOut: ChillOut;
  destinations: Destination[];
};

type AirB_AirTotal = {
  airId: string;
  name: string | undefined;
  price: number;
  hab: number;
  subTotal: number;
  totalAirB: number;
};
type chillOut_Total = {
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  dateChill: string;
  totaChill: number | undefined;
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
  airBnB: {
    id: "",
    name: "",
    hab: 0,
    price: 0,
    subTotal: 0,
  },
  chillOut: {
    id: "domino",
    name: "",
    price: 0,
    dateChill: "",
  },
  destination: {
    id: 0,
    routeStart: "",
    routeEnd: "",
    routeDateStart: new Date().toISOString(),
    routeDateEnd: new Date().toISOString(),
    days: 0,
    taxi: 0,
    totalAir: 0,
    totaChill: 0,
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
      let sum = 0;
      state.destination.AirBnBs.forEach((item) => (sum += item.subTotal));
      state.destination.totalAir = sum;
      state.destinations.push(state.destination);
    },
    addAirB_AirTotal: (state, action: PayloadAction<AirB_AirTotal>) => {
      state.airBnB.id = action.payload.airId;
      state.airBnB.name = action.payload.name;
      state.airBnB.hab = action.payload.hab;
      state.airBnB.price = action.payload.price;
      state.airBnB.subTotal = action.payload.subTotal;
      state.destination.AirBnBs.push(state.airBnB);
    },
    addChillOut: (state, action: PayloadAction<chillOut_Total>) => {
      state.chillOut.id = action.payload.id;
      state.chillOut.name = action.payload.name;
      state.chillOut.price = action.payload.price;
      state.chillOut.dateChill = action.payload.dateChill;
      state.destination.totaChill = action.payload.totaChill;
      state.destination.ChillOuts.push(state.chillOut);
    },
  },
});

export const { addStartTrip, addTaxiRoute, addAirB_AirTotal, addChillOut } =
  filteredRoutesSlice.actions;

export default filteredRoutesSlice.reducer;
