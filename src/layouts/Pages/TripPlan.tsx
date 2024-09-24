import { useState } from "react";
import FormCalendar from "../../components/FormCalendar";
import FormSelect from "../../components/FormSelect";
import citiesData from "../../components/contentText/citiesData";
import { useAppDispatch, useAppSelector } from "../../redux/configureStore";
import { addStartTrip, addTaxiRoute } from "../../redux/filteredRoutes";
import CheckBoxComponent from "../../components/CheckBoxComponent";

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
  const [display, setDisplay] = useState<string>("d-none");
  // const [routeDateStart, setRouteDateStart] = useState<Date>(dateStart);
  // const [routeDateEnd, setRouteDateEnd] = useState<Date>(dateStart)
  // console.log('date start:', dateStart, 'date end:', dateEnd)
  const dispatch = useAppDispatch();

  const getDateStart = (e: any) => setDateStart(e.target.value);
  const getDateEnd = (e: any) => setDateEnd(e.target.value);

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
    tripDays: calculateDays(dateStart, dateEnd),
  };
  const getTaxiRoute = () => {
    console.log("date start2:", dateStart);
    console.log("dateEnd2:", dateEnd);
    dispatch(
      addTaxiRoute({
        start: tripStart,
        end: tripEnd,
        routeDateStart: dateStart,
        routeDateEnd: dateEnd,
        days: calculateDays(dateStart, dateEnd),
        price: priceTaxi,
      }),
    );
  };
  const Routes = useAppSelector((state) => state.filteredRoutes);
  console.log(Routes);

  const displayFormTrip = (trip: Trip) => {
    setDisplay("d-inline");
    dispatch(addStartTrip(trip));
  };
  return (
    <div>
      <h1>TripPlan</h1>
      <div className=" d-flex">
        <FormCalendar
          getCityId={getCityId}
          items={citiesData}
          getDateStart={getDateStart}
          getDateEnd={getDateEnd}
        />
        <p className="mx-3">amount days: {calculateDays(dateStart, dateEnd)}</p>
      </div>
      <div>
        <FormSelect getCityId={getCityId} items={citiesData} />
      </div>
      <button onClick={() => displayFormTrip(startTrip)}>start trip</button>
      <div className={display}>
        <div className=" d-flex">
          <FormCalendar
            getCityId={getCityId}
            items={citiesData}
            getDateStart={getDateStart}
            getDateEnd={getDateEnd}
          />
          <p className="mx-3">
            amount days: {calculateDays(dateStart, dateEnd)}
          </p>
        </div>
        <CheckBoxComponent
          start={tripStart}
          end={tripEnd}
          getTaxiPrice={getTaxiPrice}
        />
        <button onClick={getTaxiRoute}>add destiny</button>
      </div>
    </div>
  );
};

export default TripPlan;
