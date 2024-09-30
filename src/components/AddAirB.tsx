import { useState } from "react";
import airData from "./contentText/airData";
import FormSelectAir from "./FormSelectAir";
import { useDispatch } from "react-redux";
import { addAirB_AirTotal } from "../redux/filteredRoutes";
// import chillingData from "./contentText/chillingData";

type SeletectedAirB = {
  airId: string;
  name: string | undefined;
  price: number;
  hab: number;
  subTotal: number;
};

const AddAirB = ({ city, daysRoute }: any) => {
  const [airId, setAirId] = useState<string>("Analsa");
  const [hab, setHab] = useState<string>("1");
  const [airBs, setAirBs] = useState<SeletectedAirB[]>([]);

  const dispatch = useDispatch();

  const seletedAirBs = airData.filter((air) => air.city === city);
  // const selectedChillOuts = chillingData.filter(chill => chill.city === city);

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

  let sum = 0;
  airBs.forEach((item) => (sum += item.subTotal));

  const getAirB = () => {
    setAirBs([
      ...airBs,
      {
        airId,
        name: seletedAir?.name,
        hab: Number(hab),
        price,
        subTotal,
      },
    ]);
    dispatch(
      addAirB_AirTotal({
        airId,
        name: seletedAir?.name,
        price,
        hab: Number(hab),
        subTotal,
        totalAirB: sum,
      }),
    );
  };

  const deleteAirB = (airB: string | undefined) => {
    let newArray = airBs.filter((air) => {
      return air.airId === airB;
    });
    setAirBs(newArray);
  };

  return (
    <div>
      <h1>Add Air B&B</h1>
      <div className="d-flex">
        <FormSelectAir getAirName={getAirName} items={seletedAirBs} />
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
        {seletedAir ? (
          <p className="mx-2">price: {price}</p>
        ) : (
          <p className="mx-2">price: 0</p>
        )}
        {seletedAir ? (
          <p className="mx-2">Subtotal:{subTotal}</p>
        ) : (
          <p className="mx-2">Subtotal: 0</p>
        )}
        <button onClick={getAirB}>add Air B&b</button>
      </div>
      <div>
        {airBs.map((air, index) => {
          return (
            <div key={index} className="d-flex">
              <p className="mx-2">{air.name}</p>
              <p className="mx-2">cant hab: {air.hab}</p>
              <p className="mx-2">sub total: {air.subTotal}</p>
              <button onClick={() => deleteAirB(air.airId)}>X</button>
            </div>
          );
        })}
        <p>Total: {sum}</p>
      </div>
    </div>
  );
};

export default AddAirB;
