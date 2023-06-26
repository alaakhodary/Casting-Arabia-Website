import axios from "axios";
import { useState } from "react";
import { setAccessToken } from "../axiosConfig";

export interface IAuthProps {
  authorized: boolean;
  token: string;
  error: string;
  loading: boolean;
  login: (accessToken: string) => void;
  logout: () => Promise<any>;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
  setToken: (token: string) => void;
  setAuthorized: (authorized: boolean) => void;
}

const useAuth = (): IAuthProps => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [token, setToken] = useState<string>(
    localStorage.getItem("accessToken") || ""
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const login = (accessToken: string): void => {
    localStorage.setItem("accessToken", accessToken);
    setAuthorized(true);
    setToken(accessToken);
    window.location.reload();
  };

  const logout = async (): Promise<any> => {
    const body = {
      fcm_token: token,
    };
    try {
      await axios.post(
        "https://amplify-dev.d35zevlqqza5wv.amplifyapp.com/api/auth/signout",
        body
      );
      setAccessToken("");
    } catch (error) {
      setError("An error occurred during logout");
    }
    localStorage.removeItem("accessToken");
    setAuthorized(false);
    setToken("");
  };

  return {
    authorized,
    setToken,
    token,
    error,
    loading,
    login,
    logout,
    setError,
    setLoading,
    setAuthorized,
  };
};

export default useAuth;
