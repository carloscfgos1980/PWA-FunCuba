import { useState } from "react";
import CheckBoxComponent from "./CheckBoxComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddDestination = ({ dest, getTaxiPrice }: any) => {
  // const [dateStart, setDateStart] = useState<any>(new Date(date));
  // const [dateEnd, setDateEnd] = useState<Date>(dateStart);

  // let one_day = 1000 * 60 * 60 * 24;
  // let Result = Math.round((dateEnd.getTime() -
  //     dateStart.getTime())/one_day);

  return (
    <div>
      <h1>Destination</h1>
      {/* <div className="d-flex">
                <div>
                    <p>start trip</p>
                    <DatePicker selected={dateStart} minDate={dateStart} dateFormat="dd/MM/YYYY" onChange={(dateStart:any) => setDateStart(dateStart)} />
                </div>
                <div>
                    <p>End trip</p>
                    <DatePicker minDate={dateStart} selected={dateEnd} dateFormat="dd/MM/YYYY" onChange={(dateEnd:any) => setDateEnd(dateEnd)} />
                </div>
                <p>days: {Result}</p>
            </div> */}
      <CheckBoxComponent
        price={dest.taxi.price}
        start={dest.taxi.start}
        end={dest.taxi.end}
        getTaxiPrice={getTaxiPrice}
      />
      <button
      // onClick={addDestiny}
      >
        add destiny
      </button>
    </div>
  );
};

export default AddDestination;
