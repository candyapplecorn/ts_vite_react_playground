import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GiphyApiContextProvider } from "./playground/GiphyApiContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GiphyApiContextProvider>
      <App />
    </GiphyApiContextProvider>
  </React.StrictMode>,
);
