import Keycloak from "keycloak-js";

const keycloakConfig = new Keycloak({
  url: "http://localhost:9090/",
  realm: "kaleidoscope-microservice-realm",
  clientId: "react-frontend",
});

export default keycloakConfig;
