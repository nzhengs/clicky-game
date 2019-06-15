import React from "react";
import "../Jumborton/jumbotron.css";

function Jumbotron() {
  return (
    <div className="container size">
    <h1 className="game-title">Clicky Game</h1>
    <p className="game-description">Click on an image to earn points, Failure to click unique image will lead to game end</p>
</div>
  );
}

export default Jumbotron;
