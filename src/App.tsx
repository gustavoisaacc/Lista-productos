import { Route, Routes } from "react-router-dom";
import Landing from "./Page/Landing";
import Producto from "./components/Producto";

function App() {
  return (
    <>
      <Landing>
        <Routes>
          <Route path="/nuevo-producto" element={<Producto />} />
        </Routes>
      </Landing>
    </>
  );
}

export default App;
