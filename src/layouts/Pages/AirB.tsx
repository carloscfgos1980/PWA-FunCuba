import { useState } from "react";
import Cuba from "../../components/Cuba";
import FormSelect from "../../components/FormSelect";
import CarouselAir from "../../components/CarouselAir";
import citiesData from "../../components/contentText/citiesData";
import airData from "../../components/contentText/airData";
import FunModal from "../../components/FunModal";
import havana from "../../components/imgCities/havana.jpg";
import pagesContent from "../../components/contentText/pagesContent";

type AirBB = {
  idAirB: string;
  name: string;
  route: string;
};

type SelectedCity = {
  id: number;
  city: string;
  name: string;
  description: string;
  airB: AirBB[];
};

type SelectedAirB = {
  id: number;
  airId: number;
  city: string;
  location: string;
  locationImg: string;
  price: number;
  description: string;
  airB: AirBB[];
};

const AirB = () => {
  const [cityId, setCityId] = useState<string>("1");
  const [airId, setAirId] = useState<string>("lalita");
  const [modal, setModal] = useState<boolean>(false);
  // I will create a hard code variable coz the database with the feedbacks collection is not complete
  const airIddd = "lalita";

  const getCityId = (value: string): void => setCityId(value);

  const selectedCity: SelectedCity | any = citiesData.find(
    (item) => item.id === cityId,
  );

  const toggle = (): void => setModal(!modal);

  const getAirId = (value: string): void => setAirId(value);

  const modalGetAidId = (value: string): void => {
    toggle();
    getAirId(value);
  };

  const selectedAirB: SelectedAirB | any = airData.find(
    (item) => item.airId === airId,
  );

  return (
    <div className="container-fluid bg-light py-3">
      <div className="row justify-content-center">
        <Cuba img={havana} text={pagesContent.cuba} />
        <FormSelect getCityId={getCityId} items={citiesData} />
        <FunModal
          modal={modal}
          toggle={toggle}
          name={selectedAirB.name}
          airId={airIddd}
          img={selectedAirB.locationImg}
          items={selectedAirB.airB}
          modalGetAidId={modalGetAidId}
          description={selectedAirB.description}
        />
        <div className="container-fluid bg-dark">
          <p className="title text-center py-2 my-3">{selectedCity?.city}</p>
        </div>
        <div className="row justify-content-around mt-3 g-3">
          <div className="carousel col-sm-5 ">
            <p className="text-danger text-center d-block d-sm-none">
              wide images and
            </p>
            <p className="text-danger text-center">
              click 'em' for Air B&B's details!
            </p>
            <CarouselAir
              items={selectedCity.airB}
              modalGetAidId={modalGetAidId}
            />
          </div>
          <p className="col-10 col-sm-4 order-md-first align-self-center lead">
            {selectedCity?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirB;
