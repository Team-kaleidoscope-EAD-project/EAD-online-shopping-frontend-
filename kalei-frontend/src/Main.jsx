import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
// pages
import HomePage from "./pages/HomePage/HomePage";
import ProductCatalog from "./pages/HomePage/ProductCatalog";
// pages
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/product-catalog",
    element: <ProductCatalog />,
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
