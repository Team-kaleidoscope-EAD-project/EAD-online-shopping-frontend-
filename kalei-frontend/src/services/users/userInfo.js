import keycloak from "../../auth/keycloak";

export const userInfo = async () => {
  try {
    if (keycloak.authenticated) {
      const userData = await keycloak.loadUserInfo();

      return { userData };
    } else {
      console.log("User is not authenticated.");
    }
  } catch (error) {
    console.log(error);
  }
};
