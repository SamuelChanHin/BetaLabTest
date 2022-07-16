import { apiClient } from "../config/apiClient";
import { User } from "../types/userType";

export const getAllUsersApi = async () => {
  await apiClient.get("/user");
};

export const getOneUserApi = async (userId: number) => {
  await apiClient.get(`/user/${userId}`);
};

export const getAllFriendsApi = async (userId: number) => {
  await apiClient.get(`/user/${userId}/friend`);
};

export const createUserApi = async (data: User) => {
  await apiClient.post("/user", data);
};

export const addFriendApi = async (
  requesterUserId: number,
  data: {
    responderUserId: number;
  }
) => {
  await apiClient.post(`/user/${requesterUserId}/friend`, data);
};
