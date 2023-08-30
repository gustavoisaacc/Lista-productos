import Tabla from "../components/Producto/Tabla";

const pro = Array(10).fill("item");

function Home() {
  return (
    <table>
      <tr>
        <th>Producto</th>
        <th>GR</th>
        <th>Precio</th>
        <th>Modificar</th>
      </tr>
      {pro.map((item) => {
        return <Tabla item={item} />;
      })}
    </table>
  );
}

export default Home;
