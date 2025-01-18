import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userLogin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const onSubmit = data => {
        console.log(data)
        userLogin(data.email, data.password)
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
                // const errorCode = error.code;
                // const errorMessage = error.message;
                toast.error("Enter valid Email and Password", {
                    duration: 4000,
                    position: 'top-center',
                })
              });

    };

    return (
        <div className="hero ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  bg-base-100 w-full max-w-sm lg:w-[800px] shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                       
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: true,
                                })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className='text-red-600'>Password is Required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="px-8 pb-8">
                        <Link to="/auth/signUp">Don't Have a account? Sign Up</Link>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;