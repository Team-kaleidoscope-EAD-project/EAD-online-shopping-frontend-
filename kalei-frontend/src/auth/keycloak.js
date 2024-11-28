import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/", // Keycloak server URL
  realm: "myRealm", // Your Keycloak realm
  clientId: "front-user", // Your Keycloak client ID
});

export default keycloak;
