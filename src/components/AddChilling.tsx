import { useState } from "react";
import chillingData from "./contentText/chillingData";
import FormSelectAir from "./FormSelectAir";
import { memo } from "react";
import { addChillOut, ChillOut } from "../redux/filteredRoutes";
import { useAppDispatch } from "../redux/configureStore";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
  return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

const AddChilling = ({ city }: any) => {
  const [chillId, setChillId] = useState<string>("domino");
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const [chillOuts, setChillOuts] = useState<ChillOut[]>([]);

  const dispatch = useAppDispatch();

  const getDate = (e: any) => setDate(e.target.value);

  const getChillName = (value: string): void => setChillId(value);

  const selectedChillOuts = chillingData.filter((chill) => chill.city === city);
  const seletedChill = selectedChillOuts.find((chill) => chill.id === chillId);

  const getChillOuts = () => {
    setChillOuts([
      ...chillOuts,
      {
        id: seletedChill?.id,
        name: seletedChill?.name,
        price: seletedChill?.price,
        dateChill: date,
      },
    ]);
    dispatch(
      addChillOut({
        id: seletedChill?.id,
        name: seletedChill?.name,
        price: seletedChill?.price,
        dateChill: date,
        totaChill: sum,
      }),
    );
  };

  const deleteChill = (chillOut: string | undefined) => {
    let newArray = chillOuts.filter((chill) => {
      return chill.id === chillOut;
    });
    setChillOuts(newArray);
  };
  let sum = 0;
  chillOuts.forEach((item: any) => (sum += item.price));
  console.log("sum:", sum);

  return (
    <div>
      <h1>Chilling</h1>
      <div className="d-flex">
        <FormSelectAir getAirName={getChillName} items={selectedChillOuts} />
        <p>price: {seletedChill?.price}</p>
        <div>
          <DatePicker selectedDate={date} onDateChange={getDate} />
        </div>
        <button onClick={getChillOuts}>Add Chill out</button>
      </div>
      <div>
        {chillOuts.map((chill, index) => {
          return (
            <div className="d-flex" key={index}>
              <p className="mx-2">name: {chill.name}</p>
              <p className="mx-2">price: {chill.price}</p>
              <p className="mx-2">date: {chill.dateChill}</p>
              <button onClick={() => deleteChill(chill.id)}>X</button>
            </div>
          );
        })}
        <p>Total: {sum}</p>
      </div>
    </div>
  );
};

export default AddChilling;
