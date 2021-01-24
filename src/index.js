import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CoronaProvider from "./context/CoronaContext";
import StepProvider from "./context/StepContext";

ReactDOM.render(
  <React.StrictMode>
    <CoronaProvider>
      <StepProvider>
        <App />
      </StepProvider>
    </CoronaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
