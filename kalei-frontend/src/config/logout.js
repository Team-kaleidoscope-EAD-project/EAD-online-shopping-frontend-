import keycloak from "./keycloak";

export const logout = async () => {
  try {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authenticated");

    await keycloak.logout({
      redirectUri: window.location.origin,
    });

    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
