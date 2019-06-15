import React from "react";
import "../Navbar/navbar.css";

function Navbar(props) {
  return (
      <div className="row top-bar">
        <div className="col-md-4">
          <a className="navbar-brand nav-title" href="/">
            Test Your Memory
          </a>
        </div>
        <div className="col-md-4">
          <strong
            className={
              props.message === "Your Guess is Correct"
                ? "correct"
                : props.message === "Your Guess is Incorrect"
                ? "incorrect"
                : "default"
            }
          >
            {props.message}
          </strong>
        </div>
        <div className="col-md-4">
          <strong>Score:</strong> {props.score}
          <br />
          <strong>Top Score:</strong> {props.topScore}
        </div>
      </div>
  );
}

export default Navbar;
