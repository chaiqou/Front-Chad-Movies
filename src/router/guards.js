export const userIsAuthenticated = () => {
  if (!localStorage.getItem("jwt_token")) {
    return "/unauthorized";
  }
};
