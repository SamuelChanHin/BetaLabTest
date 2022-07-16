import { LocalStorageStore } from "../config/localStorageStore";

export const getAccessToken = () => {
    return localStorage.getItem(LocalStorageStore.ACCESS_TOKEN);
  };
  