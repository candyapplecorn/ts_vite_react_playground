import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GiphyApiContextProvider } from "./state/GiphyApiContextProvider";
import { PagesContextProvider } from "./state/PagesProvider";
import { CurrentPageContextProvider } from "./state/CurrentPageProvider";

// figure out how to put "infinite" contexts into one master context provider so there isn't tons of nesting here
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PagesContextProvider>
      <CurrentPageContextProvider>
        <GiphyApiContextProvider>
          <App />
        </GiphyApiContextProvider>
      </CurrentPageContextProvider>
    </PagesContextProvider>
  </React.StrictMode>,
);
