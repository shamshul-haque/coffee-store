import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Regster";
import User from "../components/auth/User";
import Users from "../components/auth/Users";
import AddCoffee from "../components/coffee/AddCoffee";
import UpdateCoffee from "../components/coffee/UpdateCoffee";
import Home from "../components/home/Home";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user",
        element: <User />,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
