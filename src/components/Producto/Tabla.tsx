<<<<<<< HEAD
import { Products } from "../../type";

type Props = {
  item: Array<{
    id: string;
    name: string;
    grams: number;
    price: number;
  }>;
};

const handelCLick = (id) => {
  console.log(id);
};

function Tabla({ item }: Props) {
  return (
    <tr className="item__products">
=======
function Tabla({ item }) {
  return (
    <tr>
>>>>>>> 9be251b (add product in home)
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
