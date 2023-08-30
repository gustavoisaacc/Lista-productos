import Campo from "./Campo";
import "./producto.css";

const tipo = ["galletas", "fideo", "jugo", "caramelos", "legumbre", "vario"];

function Producto() {
  return (
    <div className="container">
      <form className="form">
        <Campo type="text" text="Nombre del producto" label="name" />
        <Campo type="text" text="Cantidad de gramos" label="gramos" />
        <Campo type="Number" text="Precio" label="precio" />
        <select>
          <option value="vario">seleccione el tipo de alimento</option>
          {tipo.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button className="btn">Guardar</button>
      </form>
    </div>
  );
}

export default Producto;
