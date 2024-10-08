const TableChill = ({ items, deletingChill }: any) => {
  return (
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
        {items.map((chill: any, index: number) => {
          const dateChill: string = new Date(chill.dateChill).toDateString();
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
  );
};

export default TableChill;
