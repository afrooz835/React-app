function ListGroup() {
  const items = ["Dallas", "Hyderabad", "California", "Vegas", "Portland"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
