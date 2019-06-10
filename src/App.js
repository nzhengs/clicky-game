import React, { Component } from "react";
import shuffle from "lodash/shuffle";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumborton/jumbotron.js";
import ImageCard from "./components/ImageCard/image.js";

const imageCards = [
  {
    id: 1,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166552.svg",
    clicked: false
  },
  {
    id: 2,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166563.svg",
    clicked: false
  },
  {
    id: 3,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166556.svg",
    clicked: false
  },
  {
    id: 4,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166553.svg",
    clicked: false
  },
  {
    id: 5,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166540.svg",
    clicked: false
  },
  {
    id: 6,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166548.svg",
    clicked: false
  },
  {
    id: 7,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166537.svg",
    clicked: false
  },
  {
    id: 8,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166557.svg",
    clicked: false
  },
  {
    id: 9,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166556.svg",
    clicked: false
  },
  {
    id: 10,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166539.svg",
    clicked: false
  },
  {
    id: 11,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166534.svg",
    clicked: false
  },
  {
    id: 12,
    imageLink: "https://www.flaticon.com/premium-icon/icons/svg/166/166564.svg",
    clicked: false
  }
];
let count = 0;
let topScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    imageCards,
    message: "Click an Image to begin"
  };

  storeTopScore = currentScore => {
    if (currentScore > topScore) {
      topScore = currentScore;
    }
  };

  resetData = () => {
    imageCards.forEach(imageCard => {
      imageCard.clicked = false;
    });
  };

  onImageClick = id => {
    count = count + 1;
    const imageCard = imageCards.find(imageCard => imageCard.id === id);

    if (imageCard.clicked) {
      this.endGame();
    } else {
      this.onCorrectGuess(imageCard);
    }
  };

  onCorrectGuess = imageCard => {
    this.setState({ message: "Your Guess is Correct" });
    imageCard.clicked = true;
    this.setState({ imageCards: shuffle(imageCards) });
  };

  endGame = () => {
    this.setState({ message: "Your Guess is Incorrect" });
    this.storeTopScore(count);
    count = 0;
    this.setState({ imageCards: shuffle(imageCards) });
    this.resetData();
  };

  render() {
    return (
      <div className="App">
        <Navbar
          score={count}
          topScore={topScore}
          message={this.state.message}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {this.state.imageCards.map(imageCard => {
              return (
                <ImageCard
                  imageCard={imageCard}
                  clickImage={this.onImageClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
