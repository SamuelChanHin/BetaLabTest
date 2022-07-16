import { apiClient } from "../config/apiClient";
import { User } from "../types/userType";

export const getAllUsersApi = async (): Promise<User[]> => {
  return await apiClient.get("/user");
};

export const getOneUserApi = async (userId: number) => {
  return await apiClient.get(`/user/${userId}`);
};

export const getAllFriendsApi = async (userId: number) => {
  return await apiClient.get(`/user/${userId}/friend`);
};

export const createUserApi = async (data: User) => {
  return await apiClient.post("/user", data);
};

export const addFriendApi = async (
  requesterUserId: number,
  data: {
    responderUserId: number;
  }
) => {
  return await apiClient.post(`/user/${requesterUserId}/friend`, data);
};
