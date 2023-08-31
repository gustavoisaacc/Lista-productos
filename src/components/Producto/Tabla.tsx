function Tabla({ item }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.grams}</td>
      <td>{item.price}</td>
      <td>
        <p>editar</p>
        <p>eliminar</p>
      </td>
    </tr>
  );
}

export default Tabla;
