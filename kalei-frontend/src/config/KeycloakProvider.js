import { useEffect } from "react";
import refreshToken from "./refreshToken";

const KeycloakProvider = ({ children }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return children;
};

export default KeycloakProvider;
