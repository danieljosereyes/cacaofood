import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul className="pages">
        <li>
          <Link className="link_decorate" to="/cacaofood">main</Link>
        </li>
        <li>
          <Link className="link_decorate" to="/cacaofood/about">about</Link>
        </li>
        <li>
          <Link className="link_decorate" to="/cacaofood/menus">menu</Link>
        </li>
        <li>
          <Link className="link_decorate" to="/cacaofood/contactus">contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
