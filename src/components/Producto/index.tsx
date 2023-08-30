import { useState } from "react";
import Campo from "./Campo";
import "./producto.css";
import { useDispatch } from "react-redux";
import { createNewProducts } from "../../action";
import { Products } from "../../type";

const tipo = ["galletas", "fideo", "jugo", "caramelos", "legumbre", "vario"];

function Producto() {
  const [name, setName] = useState<string>("");
  const [grams, setGrams] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const dispatch = useDispatch();
  const newProduct = (product: Products) =>
    dispatch(createNewProducts(product));

  const saveProduct = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    newProduct({
      name,
      grams,
      price,
      category,
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={saveProduct}>
        <Campo
          type="text"
          text="Nombre del producto"
          label="name"
          value={name}
          setValue={setName}
        />
        <Campo
          type="text"
          text="Cantidad de gramos"
          label="gramos"
          value={grams}
          setValue={setGrams}
        />
        <Campo
          type="Number"
          text="Precio"
          label="precio"
          value={price}
          setValue={setPrice}
        />
        <select value={category} onChange={setCategory}>
          <option value="vario">seleccione una categoria</option>
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
