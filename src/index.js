import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./pages/app/App";
import * as serviceWorker from "./serviceWorker";
import Theme from "./hoc/Theme";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
