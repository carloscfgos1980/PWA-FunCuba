import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../redux/configureStore";
import TableGeneral from "./TableGeneral";

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
              <TableGeneral
                arrive={tripPlan.trip.tripDateStart}
                departure={tripPlan.trip.tripDateEnd}
                days={tripPlan.trip.tripDays}
                amount={tripPlan.trip.totalAmount}
              />
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTrip;
