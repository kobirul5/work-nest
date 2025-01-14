import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            navigate("/auth/login")
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <button className="" onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default LogoutBtn;