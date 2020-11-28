import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./store/index";
import normalize from "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
