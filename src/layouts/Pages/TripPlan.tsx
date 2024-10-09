import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/configureStore";
import citiesData from "../../components/contentText/citiesData";
import FormCalendar from "../../components/FormCalendar";
import {
  addRoute,
  addRouteDateStart,
  addStartRoute,
  addStartTrip,
  addStartTripDate,
  addTaxiPrice,
  addTripEnd,
} from "../../redux/filteredTripPlan";
import FormSelect from "../../components/FormSelect";
import CheckBoxComponent from "../../components/CheckBoxComponent";
import AddAirB from "../../components/AddAirB";
import AddChilling from "../../components/AddChilling";
import pagesContent from "../../components/contentText/pagesContent";
import ModalTrip from "../../components/ModalTrip";

const TripPlan = () => {
  const [cityId, setCityId] = useState<string>("1");
  const [display1, setDisplay1] = useState<string>("none");
  const [key, setKey] = useState(0);
  const TripText1 = pagesContent.tripPlan.intro1;
  const TripText2 = pagesContent.tripPlan.intro2;
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const toggle = (): void => setModal(!modal);

  const dispatch = useAppDispatch();

  const getDateTripStart = (e: any) => {
    dispatch(addStartTripDate(e.target.value));
  };

  const getDateTripEnd = (e: any) => {
    dispatch(addStartTrip(e.target.value));
  };

  const getDateRouteStart = (e: any) => {
    dispatch(addRouteDateStart(e.target.value));
  };
  const getDateRouteEnd = (e: any) => {
    dispatch(addStartRoute(e.target.value));
  };

  const getCityId = (value: string): void => setCityId(value);

  const selectedCity: any = citiesData.find((city) => city?.id === cityId);
  const city = selectedCity.city;

  const getDestination = () => {
    dispatch(addTripEnd(city));
    setDisplay1("inline-block");
  };

  const getRoute = () => {
    dispatch(addRoute());
    setDisplay1("none");
    setKey((currentKey) => currentKey + 1);
  };

  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  // console.log("route:", tripPlan.route);
  const tripDays = tripPlan.trip.tripDays;
  const routeDays = tripPlan.route.days;
  const routes = tripPlan.trip.routes;
  const tripDateStart: string = new Date(
    tripPlan.trip.tripDateStart,
  ).toDateString();
  const tripDateEnd: string = new Date(
    tripPlan.trip.tripDateEnd,
  ).toDateString();

  const getTaxiPrice = (value: number) => {
    dispatch(addTaxiPrice(value));
  };

  return (
    <div key={key} className="container-fluid bg-light py-3">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="trip-introduction">
            <h1 className="text-center">Trip Plan</h1>
            <p className="lead">{TripText1}</p>
            <p className="lead">{TripText2}</p>
          </div>
          <div className="trip-calendar mt-3">
            <h1 className="text-center">Let's start. Select date</h1>
            <FormCalendar
              getDateStart={getDateTripStart}
              getDateEnd={getDateTripEnd}
            />
            <table className="table table-dark table-striped text-center my-3">
              <thead>
                <tr>
                  <th scope="col">Arrive</th>
                  <th scope="col">Departure</th>
                  <th scope="col">Total Days</th>
                  <th scope="col">Remain Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="mx-2">{tripDateStart}</th>
                  <th className="mx-2">{tripDateEnd}</th>
                  <th className="mx-2">{tripDays}</th>
                  <th className="mx-2">{tripPlan.remaninedDays}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="destionations">
            <h1 className="text-center mt-4">Routes</h1>
            <table className="table table-dark table-striped text-center my-3">
              <thead>
                <tr>
                  <th scope="col">Route</th>
                  <th scope="col">arrive</th>
                  <th scope="col">departure</th>
                  <th scope="col">days</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, index) => {
                  const routeDateStart = new Date(
                    route.routeDateStart,
                  ).toDateString();
                  const routeDateEnd = new Date(
                    route.routeDateEnd,
                  ).toDateString();
                  return (
                    <tr key={index}>
                      <th className="mx-2">{route.routeEnd}</th>
                      <td className="mx-2">{routeDateStart}</td>
                      <td className="mx-2">{routeDateEnd}</td>
                      <td className="mx-2">{route.days}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="get-city d-flex">
            <FormSelect getCityId={getCityId} items={citiesData} />
            <button className="btn btn-success" onClick={getDestination}>
              select destination
            </button>
          </div>
          <div className="form" style={{ display: display1 }}>
            <div className="route-date d-flex justify-content-end mt-3 me-3">
              <FormCalendar
                getDateStart={getDateRouteStart}
                getDateEnd={getDateRouteEnd}
              />
              <p className="mx-3">amount days: {routeDays}</p>
            </div>
            <div className="add-taxi text-end mt-3 me-3">
              <CheckBoxComponent
                start={tripPlan.route.routeStart}
                end={tripPlan.route.routeEnd}
                getTaxiPrice={getTaxiPrice}
              />
            </div>
            <div className="add-airB">
              <AddAirB city={city} daysRoute={routeDays} edit={edit} />
            </div>
            <div className="add-chill">
              <AddChilling city={city} edit={edit} />
            </div>
            <button className="btn btn-success" onClick={getRoute}>
              Add Route
            </button>
          </div>
          <div className="modal-trip my-3">
            <ModalTrip toggle={toggle} modal={modal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlan;
