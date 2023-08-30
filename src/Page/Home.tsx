import Tabla from "../components/Producto/Tabla";

const pro = Array(10).fill("item");

function Home() {
  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>GR</th>
          <th>Precio</th>
          <th>Modificar</th>
        </tr>
      </thead>
      <tbody>
        {pro.map((item, ind) => {
          return <Tabla key={ind} item={item} />;
        })}
      </tbody>
    </table>
  );
}

export default Home;
