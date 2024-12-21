import keycloak from "./keycloak";

const refreshToken = async () => {
  try {
    if (keycloak.authenticated && keycloak.isTokenExpired()) {
      await keycloak.updateToken(30);
      localStorage.setItem("authToken", keycloak.token);
      console.log("Token refreshed and saved to localStorage");
    }
  } catch (error) {
    console.error("Failed to refresh token", error);
  }
};

export default refreshToken;
