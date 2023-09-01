import { useState } from "react";
import Campo from "./Campo";
import "./producto.css";
import { useDispatch } from "react-redux";
import { createNewProducts } from "../../action";
import { Products } from "../../type";
import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const tipo = ["galletas", "fideo", "jugo", "caramelos", "legumbre", "vario"];

function Producto() {
  const [name, setName] = useState<string>("");
  const [grams, setGrams] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newProduct = (product: Products) =>
    dispatch(createNewProducts(product));

  const navigate = useNavigate();

  const generateID = () => {
    const fecha = Date.now().toString(32);
    const random = Math.random().toString(32).slice(2);
    return fecha + random;
  };

  const saveProduct = (
    e: React.ChangeEvent<HTMLInputElement | EventTarget>
  ) => {
    e.preventDefault();

    newProduct({
      id: generateID(),
      name,
      grams,
      price,
      category,
    });
    navigate("/");
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
