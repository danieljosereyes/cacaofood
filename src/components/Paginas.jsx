import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cacaofood">main</Link>
        </li>
        <li>
          <Link to="/cacaofood/about">about</Link>
        </li>
        <li>
          <Link to="/cacaofood/menu">menu</Link>
        </li>
        <li>
          <Link to="/cacaofood/contactus">contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
