import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import SearchResult from "./SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/detail/:idDrink", element: <Detail /> },
  { path: "/searchResult/:strDrink", element: <SearchResult /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
