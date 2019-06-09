import React from "react";
import "../Navbar/navbar.css";

function Navbar(props) {
  return (
    <nav>
      <ul className="nav">
        <li>
          <a className="navbar-brand nav-title" href="/">
            Clicky Game
          </a>
        </li>
        <li>
          <strong>Click an Image to begin</strong>
        </li>
        <li>
          <strong>Score:</strong> {props.score}
          <strong>Top Score:</strong> {props.topScore}
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
