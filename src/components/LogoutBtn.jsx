import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LogoutBtn = () => {
    const {logOut} = useContext(AuthContext);
    
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <button className="btn" onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default LogoutBtn;