import FormSelect from "./FormSelect";
import citiesData from "./contentText/citiesData";

const NewDestination = ({ getCityId, newDestiny }: any) => {
  return (
    <div>
      <FormSelect getCityId={getCityId} items={citiesData} />
      <button onClick={newDestiny}>new destiny</button>
    </div>
  );
};

export default NewDestination;
