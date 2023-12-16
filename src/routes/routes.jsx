import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Main from "../layout/Main";
import Colleges from "../pages/Colleges";
import Admission from "../pages/Admission";
import MyCollege from "../pages/MyCollege";
import College from "../pages/College";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/college/:slug",
        element: <College />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my-college",
        element: <MyCollege />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
