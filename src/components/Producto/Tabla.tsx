import { Products } from "../../type";

function Tabla(props: Products) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.grams}</td>
      <td>{props.price}</td>
      <td>
        <p>editar</p>
        <p>eliminar</p>
      </td>
    </tr>
  );
}

export default Tabla;
