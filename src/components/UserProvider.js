// user
// login, logout, authLoadingSplash

import { useState, useEffect, createContext } from "react";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [authIsLoading, setAuthIsLoading] = useState(true);

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
  };

  return (
    <UserContext.Provider value={userState}> {children}</UserContext.Provider>
  );
}
