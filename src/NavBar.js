import React from "react";
import { Link } from "react-router-dom";
import "./styles/navstyle.css";

function NavBar() {
  return (
    <nav>
      <ul>
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
