import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../redux/configureStore";
import CarouselAirDetails from "./CarouselAir";
import Reviews from "./Reviews";

const style = {
  position: "absolute",
  paddingLeft: "3%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
};

const ModalFun = ({
  toggle,
  modal,
  name,
  img,
  items,
  description,
  airId,
}: any) => {
  const { airFeedbacks } = useAppSelector((state) => state.filteredFeedbacks);

  const selectedFeeds = airFeedbacks.filter((feed) => {
    return feed.airId === airId;
  });

  const feedback1 = selectedFeeds[0];
  const feedback2 = selectedFeeds[1];
  const feedback3 = selectedFeeds[2];

  const itemSrc = `${process.env.PUBLIC_URL}/imagesAir/${img}`;

  return (
    <div>
      <Modal
        style={{ overflow: "scroll" }}
        open={modal}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="d-flex justify-content-between mx-5"
          >
            <p className="display-3 mt-5">"{name}"</p>
            <p
              className="lead mt-3"
              onClick={toggle}
              style={{ cursor: "pointer" }}
            >
              X
            </p>
          </Typography>
          <div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="row bg-light-subtle">
                <div className="location row justify-content-center align-content-center g-5">
                  <img
                    width="40%"
                    src={itemSrc}
                    alt={name}
                    className="text-center col-10 col-sm-5"
                  />
                  <p className="col-sm-5 align-self-center lead">
                    {description}
                  </p>
                </div>
                <div className="modalCarousel justify-content-center col-sm-10">
                  <CarouselAirDetails items={items} />
                </div>
                <div>
                  <h1 className="text-center">FEEDBACKS</h1>
                  <div className="row">
                    <div className="col-sm-4">
                      <Reviews feedback={feedback1} />
                    </div>
                    <div className="col-sm-4">
                      <Reviews feedback={feedback2} />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <Reviews feedback={feedback3} />
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalFun;
