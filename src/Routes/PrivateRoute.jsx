import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAllUsers from "../hooks/useAllUsers";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [allUser, isLoading] = useAllUsers()
    const location = useLocation()
    const userV = allUser.filter((i)=>i?.email === user?.email)

    if(loading ){
        return <Spinner></Spinner>;
    }

    // if(userV?.role === "admin"){
    //     return children;
    // }
    
    // if(userV?.role === "hr"){
    //     return children;
    // }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;