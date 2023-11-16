import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/error";
import { getPagesIterator } from "./state/get-pages-iterator";
import About from "./pages/About";

getPagesIterator().then((pages) => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <About />,
        },
        ...pages.map(({ title, component: Component }) => ({
          path: title,
          element: <Component />,
        })),
      ],
    },
  ]);

  // figure out how to put "infinite" contexts into one master context provider so there isn't tons of nesting here
  return ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
