import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage/HomePage";
import ProductCatalog from "./pages/HomePage/ProductCatalog";
// pages
import NotFoundPage from "./pages/NotFoundPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import AddToCartPage from "./pages/AddToCart/AddToCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/single-product-view",
    element: <SingleProductPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/product-catalog",
    element: <ProductCatalog />,
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
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
