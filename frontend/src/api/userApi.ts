import { apiClient } from "../config/apiClient";
import { Friend, User } from "../types/userType";

export const getAllUsersApi = async (): Promise<User[]> => {
  return (await apiClient.get("/user")).data;
};

export const getOneUserApi = async (userId: number): Promise<User> => {
  return (await apiClient.get(`/user/${userId}`)).data;
};

export const getAllFriendsApi = async (userId: number): Promise<Friend[]> => {
  return await (
    await apiClient.get(`/user/${userId}/friend`)
  ).data;
};

export const createUserApi = async (data: User): Promise<User> => {
  return (await apiClient.post("/user", data)).data;
};

export const addFriendApi = async (
  requesterUserId: number,
  data: {
    responderUserId: number;
  }
): Promise<Friend> => {
  return (await apiClient.post(`/user/${requesterUserId}/friend`, data)).data;
};
