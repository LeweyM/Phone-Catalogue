import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//renders without error
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// integration API tests...

// should immediately render the loading symbol, state.fetchState === 'loading'.

// after async api call has come back successful, should render list content. state.fetchState === 'success'.

// after async api call has come back as failure, should render sorry msg. state.fetchState === 'failure'.
