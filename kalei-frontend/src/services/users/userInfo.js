import keycloak from "../../auth/keycloak";

export const userInfo = async () => {
  if (keycloak.authenticated) {
    const userInfo = await keycloak.loadUserInfo();
    const userId = keycloak.tokenParsed.sub;

    return { userInfo, userId };
  } else {
    console.log("User is not authenticated.");
  }
};
