export const userIsAuthenticated = () =>
  localStorage.getItem("jwt_token") === null ? "/unauthorized" : "";
