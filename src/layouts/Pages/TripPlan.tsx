import { useState } from "react";
import FormCalendar from "../../components/FormCalendar";
import FormSelect from "../../components/FormSelect";
import citiesData from "../../components/contentText/citiesData";
import { useAppDispatch, useAppSelector } from "../../redux/configureStore";
import { addStartTrip, addTaxiRoute } from "../../redux/filteredRoutes";
import CheckBoxComponent from "../../components/CheckBoxComponent";
import AddAirB from "../../components/AddAirB";
import AddChilling from "../../components/AddChilling";

// type SelectedCity = {
//   id: number;
//   city: string;
//   name: string;
//   description: string;
//   airB: AirBB[];
// };

type Trip = {
  tripStart: string;
  tripEnd: string;
  tripDays: number;
};

// type Destiny ={
//     id: number;
//     priceTaxi: number;
//     city:string;
// }

const TripPlan = () => {
  const [dateStart, setDateStart] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const [dateEnd, setDateEnd] = useState<string>(dateStart);
  const [cityId, setCityId] = useState<string>("1");
  const [tripStart, setTripStart] = useState<string>("Airport");
  const [tripEnd, setTripEnd] = useState<string>("Havana");
  const [priceTaxi, setPriceTaxi] = useState<number>(0);
  const [display1, setDisplay1] = useState<string>("none");
  const [daysTrip, setDaysTrip] = useState<number>(0);
  const [daysRoute, setDaysRoute] = useState<number>(0);
  const [totalDays, setTotalDays] = useState<number[]>([]);

  const dispatch = useAppDispatch();

  const selectedCity: any = citiesData.find((city) => city?.id === cityId);
  const city = selectedCity.city;

  const getDateStart = (e: any) => setDateStart(e.target.value);
  const getDateTripEnd = (e: any) => {
    setDateEnd(e.target.value);
    const days = calculateDays(dateStart, e.target.value);
    setDaysTrip(days);
  };
  const getDateRouteEnd = (e: any) => {
    setDateEnd(e.target.value);
    const days = calculateDays(dateStart, e.target.value);
    setDaysRoute(days);
    setTotalDays([...totalDays, days]);
  };

  const sumDays = totalDays.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const remainDays = daysTrip - sumDays;

  const calculateDays = (day1: string, day2: string) => {
    const dateStart = new Date(day1);
    const dateEnd = new Date(day2);
    // let Result = dateEnd - dateStart
    let one_day = 1000 * 60 * 60 * 24;
    let Result = Math.round(
      (dateEnd.getTime() - dateStart.getTime()) / one_day,
    );
    return Result;
  };

  const getCityId = (value: string): void => setCityId(value);

  const getTaxiPrice = (value: number) => setPriceTaxi(value);

  const startTrip = {
    tripStart: dateStart,
    tripEnd: dateEnd,
    tripDays: daysTrip,
  };

  const getTaxiRoute = () => {
    dispatch(
      addTaxiRoute({
        start: tripStart,
        end: tripEnd,
        routeDateStart: dateStart,
        routeDateEnd: dateEnd,
        days: daysRoute,
        price: priceTaxi,
      }),
    );
  };
  const Routes = useAppSelector((state) => state.filteredRoutes);
  console.log(Routes);

  const displayFormTrip = (trip: Trip) => {
    setDisplay1("inline-block");
    dispatch(addStartTrip(trip));
  };

  return (
    <div>
      <h1>TripPlan</h1>
      <div className="trip-calendar-trip d-flex">
        <FormCalendar
          getCityId={getCityId}
          items={citiesData}
          getDateStart={getDateStart}
          getDateEnd={getDateTripEnd}
        />
        <p className="mx-3">amount days: {daysTrip}</p>
        <p> remaining days: {remainDays}</p>
      </div>
      <div className="get-city d-flex">
        <FormSelect getCityId={getCityId} items={citiesData} />
        <button onClick={() => displayFormTrip(startTrip)}>start trip</button>
      </div>
      <div style={{ display: display1 }}>
        <div className="form-calendar-destination d-flex">
          <FormCalendar
            getCityId={getCityId}
            items={citiesData}
            getDateStart={getDateStart}
            getDateEnd={getDateRouteEnd}
          />
          <p className="mx-3">amount days: {daysRoute}</p>
        </div>
        <div className="add-city">
          <CheckBoxComponent
            start={tripStart}
            end={tripEnd}
            getTaxiPrice={getTaxiPrice}
          />
        </div>
        <div className="add-AirB">
          <AddAirB city={city} daysRoute={daysRoute} />
        </div>
        <div>
          <AddChilling city={city} />
        </div>
        <button onClick={getTaxiRoute}>add destiny</button>
      </div>
    </div>
  );
};

export default TripPlan;
