import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userCreate } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        userCreate(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate("/")
                reset()
                toast.success('Sign up Successful', {
                    duration: 4000,
                    position: 'top-center',
                })
            })

    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* Photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input 
                            type="file" 
                            {...register("photo", { required: true })}
                            placeholder="email"
                            className="file-input file-input-bordered w-full max-w-xs"
                              />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* options */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select Your Role</span>  
                            </div>
                            <select className="select select-bordered"
                            {...register("role")}
                            >
                                <option value="employ">Employ</option>
                                <option value="hr">HR</option>
                            </select>
                            
                        </label>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])/,

                                })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className='text-red-600'>Password is Required</span>}
                            {errors.password?.type === "minLength" && <span className='text-red-600'>Password must be minimum 6 character</span>}
                            {errors.password?.type === "pattern" && <span className='text-red-600'>Password must be include one capital letter, and one special character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div>
                        <Link to="/auth/login">Have a account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;