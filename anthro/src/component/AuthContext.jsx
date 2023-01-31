import React, { useState } from "react";

export const AuthContext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const [userDetails, setUserDetails] = useState("");
  const [logout, setlogout] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const value = {
    userDetails,
    setUserDetails,
    logout,
    setlogout,
    logIn,
    setLogIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default Authcontextprovider;
