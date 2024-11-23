import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AddToCartPage from "./pages/AddToCart/AddToCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/add-to-cart",
    element: <AddToCartPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default function Main() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}
