import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./app/Store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
