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
        {productos.map((item: Products) => {
<<<<<<< HEAD
          return <Tabla key={item.id} item={item} />;
=======
          return <Tabla key={item.name} item={item} />;
>>>>>>> 9be251b (add product in home)
        })}
      </tbody>
    </table>
  );
}

export default Home;
