import { createBrowserRouter, RouterProvider } from "react-router-dom"; //We import createBrowserRouter and RouterProvider from React Router.

import App from "./App.jsx";
import Profile from "./ProfilePage.jsx";
import ErrorPage from "./ErrorPage.jsx";
/* import Popeye from "./Popeye.jsx";
import Spinach from "./Spinch.jsx";
import DefaultProfile from "./DefaultProfile.jsx"; */

const Router = () => {
  //createBrowserRouter is used to create the configuration for a router by simply passing arguments in the form of an array of routes.
  const router = createBrowserRouter([
    //The configuration array contains objects with two mandatory keys, the path and the corresponding element to be rendered.
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/",
      element: <Profile />,
    },
    {
      //The colon (:) turns the path section after it into a “dynamic segment”. Dynamic segments will match dynamic (changing) values in that position of the URL, like the name. These can also be called “URL params” or “params” in short. These can be used with the help of the useParams hook.
      path: "profile/:name",
      element: <Profile />,
    },
    /* {
    //Nested Routes
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> }, //To render something as default component when no path is added to display the nested child components of Profile

      //Nested routes - To render a section of a page differently based on different urls. Use Outlet to render these alongside the parent component 'Profile'
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  }, */
  ]);
  return <RouterProvider router={router} />;
  /* This generated configuration is then rendered in, by passing it to the RouterProvider component.*/
};
export default Router;
