import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/error";
import { getPagesIterator } from "./state/get-pages-iterator";

getPagesIterator().then((pages) => {
  const router = createBrowserRouter([
    {
      path: "/ts_vite_react_playground",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: pages.map(({ title, component: Component }) => ({
        path: title,
        element: <Component />,
      })),
    },
  ]);

  // figure out how to put "infinite" contexts into one master context provider so there isn't tons of nesting here
  return ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
