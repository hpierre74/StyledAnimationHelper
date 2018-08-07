import React from "react";
import ReactDOM from "react-dom";

import YourComponent from "../src/components/YourComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Styled-Components x React-Animations</h1>
      <h2>Animate your components with ease</h2>
      <YourComponent duration="3" animation="rotateIn" />
      <YourComponent duration="5" animation="slideInDown" />
      <YourComponent duration="1" animation="fadeInUp" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
