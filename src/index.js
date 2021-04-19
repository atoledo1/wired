import React from "react";
import ReactDOM from "react-dom";
import "wired-elements";

import "./styles.css";

function App() {
  let textInput = React.createRef();

  function handleClick() {
    window.alert(`Hello ${textInput.current.value}!`);
  }

  return (
    <main>
      <wired-card elevation="5">
        <h1>wired-elements demo</h1>
      </wired-card>

      <section>
        <wired-input placeholder="your name" ref={textInput} />
        <wired-button elevation="2" onClick={handleClick}>
          Submit
        </wired-button>
      </section>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
