import React, { createContext, useState, useEffect } from "react";
import keycloakConfig from "./keycloak";

export const KeycloakContext = createContext();

export default function KeycloakProvider({ children }) {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initKeycloak = async () => {
      try {
        const auth = await keycloakConfig.init({
          onLoad: "check-sso",
          checkLoginIframe: false,
        });
        setKeycloak(keycloakConfig);
        setAuthenticated(auth);
      } catch (error) {
        console.error("Failed to initialize Keycloak:", error);
      } finally {
        setLoading(false);
      }
    };

    initKeycloak();
  }, []);

  if (loading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
}
