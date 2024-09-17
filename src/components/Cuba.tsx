// import citiesData from "./contentText/citiesData";
import havana from "./imgCities/havana.jpg";
import pagesContent from "./contentText/pagesContent";

const cuba = () => {
  return (
    <div className="py-3">
      <div className="row justify-content-around g-5">
        <img
          className="col-10 col-sm-5"
          width="30%"
          src={havana}
          alt="havana"
        />
        <p className="col-10 col-sm-5 align-self-center lead">
          {pagesContent.cuba}{" "}
        </p>
      </div>
    </div>
  );
};

export default cuba;
