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
  subTotal: number;
  dateChill: string;
};

export type StartTrip = {
  dateStart: string;
  dateEnd: string;
};

type Route = {
  id: string;
  routeStart: string;
  routeEnd: string;
  routeDateStart: string;
  routeDateEnd: string;
  days: number;
  taxiPrice: number;
  totalAir: number;
  totalChill: number;
  totalRoute: number;
  airBnBs: AirBnB[];
  chillOuts: ChillOut[];
};

type Trip = {
  clientId: number;
  tripDateStart: string;
  tripDateEnd: string;
  tripDays: number;
  totalAmount: number;
  routes: Route[];
};
type PlanTripState = {
  remaninedDays: number | undefined;
  addedDays: any;
  destinations: string[];
  airBnB: AirBnB;
  chillOut: ChillOut;
  route: Route;
  trip: Trip;
};

type AddAirBnB = {
  airId: string;
  name: string | undefined;
  price: number;
  hab: number;
  subTotal: number;
};

const initialState: PlanTripState = {
  remaninedDays: 0,
  addedDays: 0,
  destinations: ["0-Airport"],
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
    subTotal: 0,
    dateChill: "",
  },
  route: {
    id: "",
    routeStart: "Airport",
    routeEnd: "",
    routeDateStart: "",
    routeDateEnd: "",
    days: 0,
    taxiPrice: 0,
    totalAir: 0,
    totalChill: 0,
    totalRoute: 0,
    airBnBs: [],
    chillOuts: [],
  },
  trip: {
    clientId: 0,
    tripDateStart: new Date().toISOString().slice(0, 10),
    tripDateEnd: new Date().toISOString().slice(0, 10),
    tripDays: 0,
    totalAmount: 0,
    routes: [],
  },
};

const calculateDays = (day1: string, day2: string) => {
  const dateStart = new Date(day1);
  const dateEnd = new Date(day2);
  let one_day = 1000 * 60 * 60 * 24;
  let Result = Math.round((dateEnd.getTime() - dateStart.getTime()) / one_day);
  return Result;
};
const previousLocation = (ends: string[], id: string) => {
  const index = ends.indexOf(id);
  const previous = ends[index - 1];
  return previous;
};

export const filteredPlanTripSlice = createSlice({
  name: "filteredPlanTrip",
  initialState,
  reducers: {
    addStartTrip: (state, action: PayloadAction<StartTrip>) => {
      state.trip.clientId = Number(new Date());
      state.trip.tripDateStart = action.payload.dateStart;
      state.trip.tripDateEnd = action.payload.dateEnd;
      state.trip.tripDays = calculateDays(
        action.payload.dateStart,
        action.payload.dateEnd,
      );
    },
    addTripEnd: (state, action: PayloadAction<string>) => {
      const routeNum = String(state.trip.routes.length + 1);
      state.route.id = `${routeNum}-${action.payload}`;
      state.route.routeEnd = action.payload;
      // array to save all the destinations so I can get previous location which is needed to calcultate taxi price
      state.destinations.push(state.route.id);
      state.route.routeStart = previousLocation(
        state.destinations,
        state.route.id,
      ).slice(2);
    },
    addStartRoute: (state, action: PayloadAction<StartTrip>) => {
      state.route.routeDateStart = action.payload.dateStart;
      state.route.routeDateEnd = action.payload.dateEnd;
      state.route.days = calculateDays(
        action.payload.dateStart,
        action.payload.dateEnd,
      );
      state.addedDays = state.addedDays + state.route.days;
      state.remaninedDays = state.trip.tripDays - state.addedDays;
    },
    addTaxiPrice: (state, action: PayloadAction<number>) => {
      state.route.taxiPrice = action.payload;
    },
    addAirBnB: (state, action: PayloadAction<AddAirBnB>) => {
      state.airBnB.id = action.payload.airId;
      state.airBnB.name = action.payload.name;
      state.airBnB.hab = action.payload.hab;
      state.airBnB.price = action.payload.price;
      state.airBnB.subTotal = action.payload.subTotal;
      state.route.airBnBs.push(state.airBnB);
      let sum = 0;
      state.route.airBnBs.forEach((item) => (sum += item.subTotal));
      state.route.totalAir = sum;
    },
    deleteAirBnB: (state, action: PayloadAction<string>) => {
      let newArray = state.route.airBnBs.filter((air) => {
        return air.id !== action.payload;
      });
      state.route.airBnBs = newArray;
    },
    addChillOut: (state, action: PayloadAction<ChillOut>) => {
      state.chillOut.id = action.payload.id;
      state.chillOut.name = action.payload.name;
      state.chillOut.dateChill = action.payload.dateChill;
      state.chillOut.subTotal = action.payload.subTotal;
      state.route.chillOuts.push(state.chillOut);
      let sum = 0;
      state.route.chillOuts.forEach((item) => (sum += item.subTotal));
      state.route.totalChill = sum;
    },
    deleteChill: (state, action: PayloadAction<string | undefined>) => {
      let newArray = state.route.chillOuts.filter((chill) => {
        return chill.id !== action.payload;
      });
      state.route.chillOuts = newArray;
    },
    addRoute: (state) => {
      state.route.totalRoute = state.route.totalChill + state.route.totalAir;
      state.trip.totalAmount = state.trip.totalAmount + state.route.totalRoute;
      state.trip.routes.push(state.route);
    },
  },
});

export const {
  addStartTrip,
  addTripEnd,
  addStartRoute,
  addRoute,
  addTaxiPrice,
  addAirBnB,
  deleteAirBnB,
  addChillOut,
  deleteChill,
} = filteredPlanTripSlice.actions;

export default filteredPlanTripSlice.reducer;
