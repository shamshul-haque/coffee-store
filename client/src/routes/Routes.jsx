import { createBrowserRouter } from "react-router-dom";
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
        path: "/updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
