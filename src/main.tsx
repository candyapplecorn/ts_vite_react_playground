import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { getPagesIterator } from "./state/get-pages-iterator";

getPagesIterator().then((pages) => {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          ...pages.map(({ title, component: Component }) => ({
            path: title,
            element: <Component />,
          })),
        ],
      },
    ],
    {
      basename: "/",
    },
  );

  // figure out how to put "infinite" contexts into one master context provider so there isn't tons of nesting here
  return ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
