import { useState } from "react";
import airData from "./contentText/airData";
import FormSelectAir from "./FormSelectAir";
import { useDispatch } from "react-redux";

import { addAirBnB, deleteAirBnB } from "../redux/filteredTripPlan";
import { useAppSelector } from "../redux/configureStore";
// import chillingData from "./contentText/chillingData";

// type SeletectedAirB = {
//   airId: string;
//   name: string | undefined;
//   price: number;
//   hab: number;
//   subTotal: number;
// };

const AddAirB = ({ city, daysRoute }: any) => {
  const [airId, setAirId] = useState<string>("Analsa");
  const [hab, setHab] = useState<string>("1");

  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  const airBnBs = tripPlan.route.airBnBs;
  const sum = tripPlan.route.totalAir;

  const dispatch = useDispatch();

  const seletedAirBs = airData.filter((air) => air.city === city);

  const getArrayOptions = (hab: number | undefined) => {
    if (hab === 1) {
      return ["1"];
    } else if (hab === 2) {
      return ["1", "2"];
    } else if (hab === 3) {
      return ["1", "2", "3"];
    } else if (hab === 4) {
      return ["1", "2", "3", "4"];
    } else {
      return ["1", "2", "3", "4", "5"];
    }
  };

  const getAirName = (value: string): void => setAirId(value);

  const seletedAir = seletedAirBs.find((air) => air.id === airId);
  const AirHab: number | undefined = seletedAir?.hab;
  const arrayHab = getArrayOptions(AirHab);

  const price: any = seletedAir?.price;

  const subTotal: number | undefined = price * Number(hab) * daysRoute;

  const getAirB = () => {
    dispatch(
      addAirBnB({
        airId,
        name: seletedAir?.name,
        price,
        hab: Number(hab),
        subTotal,
      }),
    );
  };

  const deleteAirB = (airB: string) => {
    dispatch(deleteAirBnB(airB));
  };

  return (
    <div>
      <h1 className="text-center">Pick a nice place to sleep!</h1>
      <div className="row justify-content-center align-content-center">
        <div className="addAir col-6">
          <FormSelectAir getAirName={getAirName} items={seletedAirBs} />
        </div>
        <div className="col-5">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={"DEFAULT"}
            onChange={(e) => setHab(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Rooms amount
            </option>
            {arrayHab.map((item: any, index: number) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="price col-3 mt-2">
          {seletedAir ? <p>price: $ {price}</p> : <p>price: 0</p>}
        </div>
        <div className="subtotal col-3 mt-2">
          {seletedAir ? <p> amount: ${subTotal}</p> : <p> amount: 0</p>}
        </div>
        <button className="col-3 btn btn-success mt-2" onClick={getAirB}>
          Add
        </button>
      </div>
      <div>
        <table className="table table-dark table-striped text-center my-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">rooms</th>
              <th scope="col">amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {airBnBs.map((air, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{air.name}</th>
                  <td className="mx-2">{air.hab}</td>
                  <td className="mx-2">{air.subTotal}</td>
                  <td>
                    <button onClick={() => deleteAirB(air.id)}>X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead fw-bold">Total: {sum}</p>
      </div>
    </div>
  );
};

export default AddAirB;
