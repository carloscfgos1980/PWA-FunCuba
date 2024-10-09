const TableAir = ({ items, deleteAirB, edit }: any) => {
  return (
    <table className="table table-dark table-striped text-center my-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">rooms</th>
          <th scope="col">amount</th>
          {edit === false && <th scope="col"></th>}
        </tr>
      </thead>
      <tbody>
        {items.map((air: any, index: number) => {
          return (
            <tr key={index}>
              <th scope="row">{air.name}</th>
              <td className="mx-2">{air.hab}</td>
              <td className="mx-2">{air.subTotal}</td>
              {edit === false && (
                <td>
                  <button onClick={() => deleteAirB(air.id)}>X</button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableAir;
