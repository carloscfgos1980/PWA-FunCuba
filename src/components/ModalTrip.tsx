import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useAppSelector } from "../redux/configureStore";

const ModalTrip = ({ toggle, modal }: any) => {
  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  console.log("trip plan:", tripPlan.trip);

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Check ur trip
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <table className="table table-dark table-striped text-center my-3">
            <thead>
              <tr>
                <th scope="col">Arrive</th>
                <th scope="col">Departure</th>
                <th scope="col">Days</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="mx-2">{tripPlan.trip.tripDateStart}</th>
                <th className="mx-2">{tripPlan.trip.tripDateEnd}</th>
                <th className="mx-2">{tripPlan.trip.tripDays}</th>
                <th className="mx-2">{tripPlan.trip.totalAmount}</th>
              </tr>
            </tbody>
          </table>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalTrip;
