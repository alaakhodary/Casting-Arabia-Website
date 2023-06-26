import { useLayoutEffect } from "react";
import Router from "./router/router";
import { setAccessToken } from "./axiosConfig";

function App() {
  useLayoutEffect(() => {
    const token: any = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  return (
    <div className="font-primary">
      <Router />
    </div>
  );
}

export default App;
