import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //We import createBrowserRouter and RouterProvider from React Router.
import App from "./App.jsx";
import Profile from "./ProfilePage.jsx";
import "./index.css";

//createBrowserRouter is used to create the configuration for a router by simply passing arguments in the form of an array of routes.
const router = createBrowserRouter([
  //The configuration array contains objects with two mandatory keys, the path and the corresponding element to be rendered.
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* This generated configuration is then rendered in, by passing it to the RouterProvider component.*/}
  </React.StrictMode>
);

{
  /*
   *
   *
   *
   *
   */
}
