import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import KeycloakProvider from "./config/KeycloakProvider";
import routes from "./routes/routes";

const router = createBrowserRouter(routes);
export default function Main() {
  return (
    <React.StrictMode>
      <KeycloakProvider>
        <RouterProvider router={router} />
      </KeycloakProvider>
    </React.StrictMode>
  );
}
