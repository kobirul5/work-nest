import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    const {googleLoginUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        googleLoginUser()
        .then((result) => {
            const user = result.user;
            navigate('/')
            toast.success('Login with Google Successfully', {
                duration: 4000,
                position: 'top-center',
            })
           
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error('Login Failed', {
                duration: 4000,
                position: 'top-center',
            })
          });
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-outline"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default GoogleLogin;