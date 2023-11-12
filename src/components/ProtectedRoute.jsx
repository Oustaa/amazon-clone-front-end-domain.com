import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ to }) => {
  const { token, name } = useSelector((state) => state.auth.store);
  return token && name ? <Outlet /> : <Navigate to={to} />;
};

export default ProtectedRoute;
