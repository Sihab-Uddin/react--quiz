import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>My React Project</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
