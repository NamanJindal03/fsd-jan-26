import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const {isLoggedIn} = useContext(AuthContext);
    console.log(isLoggedIn);
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;