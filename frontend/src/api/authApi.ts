import { apiClient } from "../config/apiClient";
import { User } from "../types/userType";

export const loginApi = async (data: {
  email: string;
  password: string;
}): Promise<User & { access_token: string }> => {
  return (
    await apiClient.post("/auth/login", {
      username: data.email,
      password: data.password,
    })
  ).data;
};

export const tokenValidationApi = async (): Promise<
  User & { access_token: string }
> => {
  return (await apiClient.post("/auth/token/validate")).data;
};
