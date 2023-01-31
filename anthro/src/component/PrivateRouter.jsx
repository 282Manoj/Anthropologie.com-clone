import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoutes({ children }) {
  const { logIn } = useContext(AuthContext);

  if (!logIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoutes;
