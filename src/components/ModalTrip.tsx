import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../redux/configureStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalTrip = ({ modal, toggle }: any) => {
  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  console.log("trip plan:", tripPlan.trip);

  return (
    <div>
      <button className="btn btn-warning" onClick={toggle}>
        Check ur trip
      </button>
      <Modal
        open={modal}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p
            className="text-end"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          >
            X
          </p>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Trip
            </Typography>
          </div>
          <div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTrip;
