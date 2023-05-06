import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./Detail";
import SearchResult from "./SearchResult";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "detail/:idDrink", element: <Detail /> },
  {
    path: "searchResult/:keyword",
    element: <SearchResult />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
