import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumborton";
import ImageCard from "./components/ImageCard";

// const imageCard = [
//   {
//     id: 1,
//     imageLink: ,
//     clicked: false
//   },
//   {
//     id: 2,
//     imageLink: ,
//     clicked: false
//   },
//   {
//     id: 3,
//     imageLink: ,
//     clicked: falsee
//   },
//   {
//     id: 4,
//     imageLink: ,
//     clicked: falsee
//   },
//   {
//     id: 5,
//     imageLink: ,
//     clicked: falsee
//   },
//   {
//     id: 6,
//     imageLink: ,
//     clicked: false
//   }
// ];


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Jumbotron></Jumbotron>
    <ImageCard></ImageCard>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
