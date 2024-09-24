const FormDestination = ({ getCityId, items }: any) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue={"DEFAULT"}
      onChange={(e) => getCityId(e.target.value)}
    >
      <option value="DEFAULT" disabled>
        Open this select menu
      </option>
      {items.map((item: any, index: number) => {
        return (
          <option value={item.id} key={index}>
            {item.city}
          </option>
        );
      })}
    </select>
  );
};

export default FormDestination;
