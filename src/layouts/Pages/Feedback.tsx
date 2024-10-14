import { useAppSelector } from "../../redux/configureStore";

const Feedback = () => {
  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  console.log("client", tripPlan.trip.clientData);
  return (
    <div>
      <h1>Feedback</h1>
    </div>
  );
};

export default Feedback;
