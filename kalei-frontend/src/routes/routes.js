import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import AddToCartPage from "../pages/AddToCart/AddToCart";
import NotFoundPage from "../pages/NotFoundPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/single-product-view",
    element: (
      <Layout>
        <SingleProductPage />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/product-catalog",
    element: (
      <Layout>
        <ProductCatalog />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/add-to-cart",
    element: (
      <Layout>
        <AddToCartPage />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
];

export default routes;
