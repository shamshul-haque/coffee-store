import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/coffee/AddCoffee";
import CoffeeDetails from "../components/coffee/CoffeeDetails";
import UpdateCoffee from "../components/coffee/UpdateCoffee";
import Home from "../components/home/Home";
import ErrorPage from "../errorPage/ErrorPage";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://server-eta-smoky.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://server-eta-smoky.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`https://server-eta-smoky.vercel.app/coffee/${params.id}`),
      },
    ],
  },
]);

export default router;
