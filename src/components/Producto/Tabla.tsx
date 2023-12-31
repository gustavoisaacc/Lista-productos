const handelCLick = (id: string) => {
  console.log(id);
};

function Tabla({ item }) {
  return (
    <tr className="item__products">
      <td>{item.name}</td>
      <td>{item.grams}</td>
      <td>{item.price}</td>
      <td>
        <button
          className="table__btn btn--primary"
          onClick={() => handelCLick(item.id)}
        >
          editar
        </button>
        <button className="table__btn btn--delete">eliminar</button>
      </td>
    </tr>
  );
}

export default Tabla;
