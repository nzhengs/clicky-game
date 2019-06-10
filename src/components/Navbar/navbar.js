import React from "react";
import "../Navbar/navbar.css";

function Navbar(props) {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a className="navbar-brand nav-title" href="/">
            Test Your Memory
          </a>
        </li>
        <li>
          <strong>{props.message}</strong>
        </li>
        <li>
          <strong>Score:</strong> {props.score}
          <br/>
          <strong>Top Score:</strong> {props.topScore}
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
