import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import loginImage from "../../assets/images/login.jpg"
import { ThemeContext } from '../../providers/ThemeProvider';

const imageHostingKay = import.meta.env.VITE_IMAGE_HOSTING_KAY
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKay}`

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userCreate, updateUserProfile, } = useContext(AuthContext);
    const {theme} =useContext(ThemeContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();

    const onSubmit = data => {
        userCreate(data.email, data.password)
            .then((result) => {
                const user = result.user;
                const imageFile = { image: data.photo[0] }
                axiosPublic.post(imageHostingApi, imageFile, {
                    headers: { "content-type": "multipart/form-data" },
                })
                    .then(res => {
                        const photoUrl = res.data.data.display_url
                        updateUserProfile(data.name, photoUrl)
                            .then(() => {
                                const userData = {
                                    name: data.name,
                                    email: data.email,
                                    image: photoUrl,
                                    role: data.role,
                                    bankAccountNo: data.bankAccount,
                                    salary: data.salary,
                                    designation: data.designation,
                                }
        
                                axiosPublic.post("/users", userData)
                                    .then(res => {
                                        if (res.data.insertedId) {
                                            navigate("/")
                                            reset()
                                            toast.success('Sign up Successful', {
                                                duration: 4000,
                                                position: 'top-center',
                                            })
                                        }
                                    })

                            }).catch((error) => {
                                toast.error(error.messages)
                            });

                    })
            })
        .catch((error)=>{
            toast.error(error.message)
        })
    };


    return (
        <div 
        style={{
                    backgroundImage: `url(${loginImage})`,
                  }}
        className="hero min-h-screen ">
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pt-20 text-white">Sign Up now!</h1>
                </div>
                <div 
                    className={`card w-full ${theme === "light"? "bg-white": "bg-[#161616] text-[#777777]"}  lg:w-[800px] shrink-0`}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4 md:grid md:grid-cols-2">
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
                        {/* salary */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary</span>
                            </label>
                            <input type="number" {...register("salary", { required: true })} placeholder="Salary" className="input input-bordered" />
                            {errors.salary && <span className='text-red-600'>Name is required</span>}
                        </div>
                        {/* Bank Account */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bank Account</span>
                            </label>
                            <input type="number" {...register("bankAccount", { required: true })} placeholder="Salary" className="input input-bordered" />
                            {errors.salary && <span className='text-red-600'>Bank Account number is required</span>}
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
                                className="file-input  file-input-bordered w-full "
                            />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* options */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Select Your Role</span>
                            </div>
                            <select className="select select-bordered"
                                {...register("role", { required: true })}
                            >
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>
                            </select>
                            {errors.role && <span className='text-red-600'>Role is required</span>}

                        </label>
                        {/* options 2 */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Select Your Designation</span>
                            </div>
                            <select className="select select-bordered"
                                {...register("designation", { required: true })}
                            >
                                <option value="Web developer">Web developer</option>
                                <option value="Digital Marketer">Digital Marketer</option>
                                <option value="Graphics Designer">Graphics Designer</option>
                            </select>
                            {errors.designation && <span className='text-red-600'>designation is required</span>}

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
                        <div className="form-control mt-6 lg:col-span-2">
                            <button className="btn bg-primary-color text-white hover:text-black hover:border-primary-color">Sign Up</button>
                        </div>
                    </form>
                    <div className='px-8 pb-8 text-primary-color'>
                        <Link to="/auth/login">Have a account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;