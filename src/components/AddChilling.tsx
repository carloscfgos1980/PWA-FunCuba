import { useState } from "react";
import chillingData from "./contentText/chillingData";
import FormSelectAir from "./FormSelectAir";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/configureStore";
import { addChillOut, deleteChill } from "../redux/filteredTripPlan";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
  return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

const AddChilling = ({ city }: any) => {
  const [chillId, setChillId] = useState<string>("domino");
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const [chillAmount, setChillAmount] = useState<string>("1");
  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  const chillOuts = tripPlan.route.chillOuts;
  const totalChill = tripPlan.route.totalChill;

  const dispatch = useAppDispatch();

  const getDate = (e: any) => setDate(e.target.value);

  const getChillName = (value: string): void => setChillId(value);

  const selectedChillOuts = chillingData.filter((chill) => chill.city === city);
  const seletedChill = selectedChillOuts.find((chill) => chill.id === chillId);
  const price: any = seletedChill?.price;

  const subTotal: number | undefined = price * Number(chillAmount);

  const getChillOuts = () => {
    dispatch(
      addChillOut({
        id: seletedChill?.id,
        name: seletedChill?.name,
        dateChill: date,
        subTotal,
      }),
    );
  };

  const deletingChill = (id: string | undefined) => {
    dispatch(deleteChill(id));
  };

  return (
    <div>
      <h1 className="text-center">Let's have fun!</h1>
      <div className="row justify-content-center align-content-center mx-2">
        <div className="addChill col-6">
          <FormSelectAir getAirName={getChillName} items={selectedChillOuts} />
        </div>
        <div className="col-5">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={"1"}
            onChange={(e) => setChillAmount(e.target.value)}
          >
            <option value="1">Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <p className="col-3 mt-2">price: {price}</p>
        <p className="col-3 mt-2">sub total: {subTotal}</p>
        <div className="col-4 mt-2">
          <DatePicker selectedDate={date} onDateChange={getDate} />
        </div>
        <button className="col-2 btn btn-success mt-2" onClick={getChillOuts}>
          Add
        </button>
      </div>
      <div>
        <table className="table table-dark table-striped text-center my-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">amount</th>
              <th scope="col">date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {chillOuts.map((chill, index) => {
              const dateChill: string = new Date(
                chill.dateChill,
              ).toDateString();
              return (
                <tr key={index}>
                  <th className="mx-2">{chill.name}</th>
                  <td className="mx-2">{chill.subTotal}</td>
                  <td className="mx-2">{dateChill}</td>
                  <td>
                    <button onClick={() => deletingChill(chill.id)}>X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead fw-bold">Total: {totalChill}</p>
      </div>
    </div>
  );
};

export default AddChilling;
