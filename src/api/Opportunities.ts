import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.REACT_APP_API_Opportunities;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchOpportunities = async (token: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get("opportunities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch opportunities");
  }
};
