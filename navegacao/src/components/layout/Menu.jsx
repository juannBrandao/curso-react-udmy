import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link to="/param">Param</Link>
          </li>
          <li>
            <Link to="/param/123">Param02</Link>
          </li>
          <li>
            <Link to="/Naoexiste">Naoexiste</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Menu;
