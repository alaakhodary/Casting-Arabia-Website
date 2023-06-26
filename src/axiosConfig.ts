import axios from "axios";

const apiUrl = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL: apiUrl,
});

export const setAccessToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = token;
};
