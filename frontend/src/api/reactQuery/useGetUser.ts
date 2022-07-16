import { getAllFriendsApi } from "./../userApi";
import { useQuery, UseQueryResult } from "react-query";
import { Friend, User } from "../../types/userType";
import { getAllUsersApi, getOneUserApi } from "../userApi";

export const useGetUserList = (): UseQueryResult<User[], Error> => {
  return useQuery<User[], Error>("users", getAllUsersApi, {
    refetchOnWindowFocus: false,
  });
};

export const useGetUser = (id: number): UseQueryResult<any, Error> => {
  return useQuery<User, Error>([`user-${id}`, id], () => getOneUserApi(id), {
    refetchOnWindowFocus: false,
  });
};

export const useGetUserFriendList = (
  id: number
): UseQueryResult<Friend[], Error> => {
  return useQuery<Friend[], Error>(
    [`friend-${id}`, id],
    () => getAllFriendsApi(id),
    {
      refetchOnWindowFocus: false,
    }
  );
};
