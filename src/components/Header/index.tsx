import { Link } from "react-router-dom";
import { SiReactrouter } from "react-icons/si";

import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <div className="header__logo">
          <SiReactrouter className="logo--white" />
          <span className="logo--white rotate">AIFOS</span>
        </div>
        <div className="header__add">
          <Link to="/nuevo-producto" className="add--white">
            Nuevo Producto
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
