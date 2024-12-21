import keycloakConfig from "./keycloak";

export const auth = async () => {
  try {
    if (keycloakConfig) {
      await keycloakConfig.login();
    } else {
      console.error("Keycloak is not initialized");
    }
  } catch (error) {
    console.error("Failed to initialize Keycloak login:", error);
  }
};
