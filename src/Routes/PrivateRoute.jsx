import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spinner></Spinner>;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;