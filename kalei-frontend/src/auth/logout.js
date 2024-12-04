import keycloakConfig from "./keycloak";

export const logout = async () => {
  try {
    // localStorage.removeItem("authToken");
    // localStorage.removeItem("isAuthenticated");

    await keycloakConfig.logout({
      redirectUri: window.location.origin,
    });

    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
