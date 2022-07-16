import { apiClient } from "../config/apiClient";

export const loginApi = async (email: string, password: string) => {
  await apiClient.post("/auth/login");
};

export const tokenValidationApi = async () => {
  await apiClient.post("/auth/token/validate");
};
