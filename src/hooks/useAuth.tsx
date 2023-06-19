import { useState } from "react";

export interface IAuthProps {
  authorized: boolean;
  token: string;
  error: string;
  loading: boolean;
  login: (token: string) => void;
  /* logout: () => Promise<any>; */
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

const useAuth = (): IAuthProps => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const login = (token: string): void => {
    localStorage.setItem("token", token);
    setAuthorized(true);
    setToken(token);
  };

  /* const logout = async (): Promise<any> => {
    const body = {
      fcm_token: token,
    };
    try {
      await axios.post("logout", body);
      console.log("Logged out successfully");
      setAccessToken("");
    } catch (error) {
      setError("An error occurred during logout");
    }
    localStorage.removeItem("token");
    setAuthorized(false);
    setToken("");
  }; */

  return {
    authorized,
    token,
    error,
    loading,
    login,
    /* logout, */
    setError,
    setLoading,
  };
};

export default useAuth;
