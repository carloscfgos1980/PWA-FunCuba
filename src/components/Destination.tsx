const Destination = ({ items }: any) => {
  return (
    <div>
      <div>
        from{} to {} days: {}
      </div>
      <div>
        {items.map((item: any) => {
          return (
            <div key={item.id}>
              <p>city: {item.city}</p>
              {item.priceTaxi > 0 ? (
                <p>taxi price: {item.priceTaxi}</p>
              ) : (
                <h1>no taxi</h1>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destination;
