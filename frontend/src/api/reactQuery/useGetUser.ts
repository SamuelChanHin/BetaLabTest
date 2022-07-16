import { useQuery, UseQueryResult } from "react-query";
import { User } from "../../types/userType";
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
