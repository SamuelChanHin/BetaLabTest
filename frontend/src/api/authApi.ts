import { apiClient } from "../config/apiClient";

export const loginApi = async (email: string, password: string) => {
  return await apiClient.post("/auth/login");
};

export const tokenValidationApi = async () => {
  return await apiClient.post("/auth/token/validate");
};
