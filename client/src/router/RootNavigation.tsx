import { useState } from "react";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

const RootNavigation: () => JSX.Element = () => {
  const [isConnected, setIsConnected] = useState(
    localStorage.getItem("data") ? true : false
  );

  const login = () => {
    setTimeout(() => {
      setIsConnected(true);
    }, 2000);
  };
  const logout = () => setIsConnected(false);

  return (
    <>
      {isConnected ? (
        <AppNavigation logout={logout} />
      ) : (
        <AuthNavigation login={login} />
      )}
    </>
  );
};

export default RootNavigation;
