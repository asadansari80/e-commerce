export const BASE_URL = "http://localhost:8080/api/v1";
export const APP_ENPOINT = {
  createUser: "/register",
  userLogin: "/login",
  forgotPassword: "/password/forgot",
  updatePasswordService: "/password/update",
  updateProfileService: "/me/update",
  createproduct: "/admin/product/new",
};

export const generateUrl = (endpoint) => {
  return BASE_URL + endpoint;
};