import React from "react";
import { Link } from "react-router-dom";
import logo from "./spaceXlogo1.png"; // Import the image file
import "./styles/navstyle.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Main Logo" /> {/* Use the imported logo */}
          </Link>
        </li>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/mypage">My Status</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
