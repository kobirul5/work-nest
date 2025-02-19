import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";
import useAllUsers from "../../hooks/useAllUsers";
import loginImage from "../../assets/images/login.jpg"

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [allUser] = useAllUsers()
    const { userLogin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const [roleInfo, setRoleInfo] = useState({email:"kobirul@gmail.com", password:"Kobirul23$"})

    // Uer Role 
    const handleRoleSet = (role)=>{
        console.log(role)
        if(role== "Admin"){
            setRoleInfo({email:"kobirul@gmail.com", password:"Kobirul23$"})
        }
       else if(role== "HR"){
            setRoleInfo({email:"hr@gmail.com", password:"Kobirul23$"})
        }
       else if(role== "Employee"){
            setRoleInfo({email:"employee@gmail.com", password:"Kobirul23$"})
        }
    }
    console.log(roleInfo)

    const onSubmit = data => {
        const filterData = allUser.find((item) => item?.email === data?.email)
        if (filterData?.isFired) {
            return toast.error("Your are Fired by Admin")
        }

        userLogin(roleInfo?.email,roleInfo?.password)
            .then(result => {
                const user = result.user;
                navigate(location.state ? location.state : "/")
                reset()
                toast.success('Login Successful', {
                    duration: 4000,
                    position: 'top-center',
                })
            })
            .catch((error) => {
                toast.error("Enter valid Email and Password", {
                    duration: 4000,
                    position: 'top-center',
                })
            });

    };

    return (
        <div
            style={{
                backgroundImage: `url(${loginImage})`,
            }}
            className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col mt-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Login now!</h1>
                </div>
                <div className="card  bg-base-100 w-full max-w-sm lg:w-[800px] shrink-0">
                    <div className="flex justify-between px-8 pt-8 text-2xl font-bold">
                        <button className={`btn ${roleInfo.email === "kobirul@gmail.com" && "bg-primary-color text-white"} `} onClick={()=>handleRoleSet("Admin")}>Admin</button>
                        <button className={`btn ${roleInfo.email === "hr@gmail.com" && "bg-primary-color text-white"} `} onClick={()=>handleRoleSet("HR")}>HR</button>
                        <button className={`btn ${roleInfo.email === "employee@gmail.com" && "bg-primary-color text-white"} `} onClick={()=>handleRoleSet("Employee")}>Employee</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email" 
                            value={roleInfo?.email}
                            onChange={(e) => setRoleInfo({...roleInfo, password: e.target.value})}
                            {...register("email", { required: true })} 
                            placeholder="email" 
                            className="input input-bordered" 
                            />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password"
                                value={roleInfo?.password}
                                onChange={(e) => setRoleInfo({...roleInfo, password: e.target.value})}
                                {...register("password", {
                                    required: true,
                                })} 
                                placeholder="password" 
                                className="input input-bordered" />
                            {errors.password?.type === "required" && <span className='text-red-600'>Password is Required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primary-color text-white hover:text-black hover:border-primary-color">Login</button>
                        </div>
                    </form>
                    <div className="px-8 pb-8 space-y-2">
                        <Link to="/auth/signUp">Don't Have a account? Sign Up</Link>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;