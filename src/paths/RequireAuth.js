import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./components/logincomponents/hooks/useAuth";
const RequireAuth = () => {
    const { auth, setAuth } = useAuth();
    const location = useLocation();
    const isLoggedIn=window.localStorage.getItem("isLoggedIn")
    return (
        isLoggedIn==="true"
            ? <Outlet />
            : <Navigate to="/Login" state={{ from: location }} replace />
    )
}
export default RequireAuth;