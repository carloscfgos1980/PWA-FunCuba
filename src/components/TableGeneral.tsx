const TableGeneral = ({ arrive, departure, days, amount }: any) => {
  return (
    <table className="table table-dark table-striped text-center my-3">
      <thead>
        <tr>
          <th scope="col">Arrive</th>
          <th scope="col">Departure</th>
          <th scope="col">Days</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="mx-2">{arrive}</th>
          <th className="mx-2">{departure}</th>
          <th className="mx-2">{days}</th>
          <th className="mx-2">{amount}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default TableGeneral;
