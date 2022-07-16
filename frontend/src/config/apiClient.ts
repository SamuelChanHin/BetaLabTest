import axios from "axios";
import { getAccessToken } from "../util/localStoage";
import { config } from "./config";

export const apiClient = axios.create({
  baseURL: config.baseUrl,
});

apiClient.interceptors.request.use(async (config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  }

  return config;
});
