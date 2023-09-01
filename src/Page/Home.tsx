import { useSelector } from "react-redux";
import Tabla from "../components/Producto/Tabla";
import { Products } from "../type";

function Home() {
  const productos = useSelector((state) => state.products.products);

  return (
    <table>
      <thead>
        <tr className="table--title">
          <th>Producto</th>
          <th>GR</th>
          <th>Precio</th>
          <th>Modificar</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((item: Array<Products>) => {
          return <Tabla key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
}

export default Home;
