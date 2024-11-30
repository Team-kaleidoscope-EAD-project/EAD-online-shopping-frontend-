import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/", // Keycloak server URL
  realm: "kaleidoscope-microservice-realm", // Your Keycloak realm
  clientId: "react-frontend", // Your Keycloak client ID
});

export default keycloak;
