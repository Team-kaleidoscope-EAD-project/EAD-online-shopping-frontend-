import keycloak from "./keycloak"; // Adjust the import path as needed

export const auth = async () => {
  try {
    // const authenticated = await keycloak.init({ onLoad: "check-sso" });

    if (!keycloak.authenticated) {
      await keycloak.login(); // Initiates the login flow
    } else {
      console.log("User is already authenticated");

      // Save token and authentication status in local storage
      localStorage.setItem("authToken", keycloak.token);

      console.log("Local storage updated successfully.");
    }
  } catch (error) {
    console.error("Failed to initialize Keycloak login:", error);
  }
};
