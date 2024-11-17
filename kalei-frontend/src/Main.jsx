import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingleProductPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default function Main() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
