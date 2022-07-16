import { LocalStorageStore } from "../config/localStorageStore";

export const getAccessToken = () => {
  return localStorage.getItem(LocalStorageStore.ACCESS_TOKEN);
};

export const setAccessToken = (accessToken: string) => {
  return localStorage.setItem(LocalStorageStore.ACCESS_TOKEN, accessToken);
};
