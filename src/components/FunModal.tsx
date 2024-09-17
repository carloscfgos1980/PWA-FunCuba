import { Modal, ModalHeader, ModalBody } from "reactstrap";
import CarouselAirDetails from "./CarouselAir";
import { useAppSelector } from "../redux/configureStore";
import Reviews from "./Reviews";

function FunModel({
  toggle,
  modal,
  name,
  img,
  items,
  description,
  airId,
}: any) {
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
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
          <div className="text-center">{name}</div>
        </ModalHeader>
        <ModalBody>
          <div className="row bg-light-subtle">
            <div className="location row justify-content-center align-content-center g-5">
              <img
                width="40%"
                src={itemSrc}
                alt={name}
                className="text-center col-10 col-sm-5"
              />
              <p className="col-sm-5 align-self-center lead">{description}</p>
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
                <div className="col-sm-4">
                  <Reviews feedback={feedback3} />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default FunModel;
