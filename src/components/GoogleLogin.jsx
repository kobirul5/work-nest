import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAllUsers from "../hooks/useAllUsers";


const imageHostingKay = import.meta.env.VITE_IMAGE_HOSTING_KAY
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKay}`

const GoogleLogin = () => {
    const { googleLoginUser, updateUserProfile, logOut } = useContext(AuthContext)
    const [allUser] = useAllUsers()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();
    const location = useLocation()
    const [loginEmail, setLoginEmail]  = useState()

    const onSubmit = data => {
        const filterData = allUser.find((item) => item?.email === data?.email)
        if (filterData?.isFired) {
            return toast.error("Your are Fired by Admin")
        }


        const imageFile = { image: data.photo[0] }
        axiosPublic.post(imageHostingApi, imageFile, {
            headers: { "content-type": "multipart/form-data" },
        }).then(res => {
            const photoUrl = res.data.data.display_url
            const userData = {
                name: data.name,
                email: loginEmail,
                image: photoUrl,
                role: data.role,
                bankAccountNo: data.bankAccount,
                salary: data.salary,
                designation: data.designation,
            }
            googleLoginUser()
                .then((result) => {
                    const user = result.user;
                    axiosPublic.post("/users", userData)
                        .then(res => {
                            if (res.data.insertedId) {
                                navigate(location.state ? location.state : "/")
                                reset()
                                toast.success('Sign up Successful', {
                                    duration: 4000,
                                    position: 'top-center',
                                })
                            }
                        })
                        .catch((error) => {
                            toast.error(error.message)
                        })
                }).catch((error) => {
                    const errorMessage = error.message;
                    toast.error('Login Failed', {
                        duration: 4000,
                        position: 'top-center',
                    })
                });

        })
    };


    const handleGoogleLogin = () => {

        googleLoginUser()
            .then(async (result) => {
                const user = result.user;
                const filterData = allUser.find((item) => item?.email === user?.email)
                if (!filterData) {
                    setLoginEmail(user?.email)
                    await logOut()
                    document.getElementById('my_modal_5').showModal()
                    return
                }
                navigate(location.state ? location.state : "/")
                reset()
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
            <button onClick={() => {
                handleGoogleLogin()
                // document.getElementById('my_modal_5').showModal()
            }} className="btn btn-outline"><FaGoogle></FaGoogle></button>
            {/* modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">You Should  fill this from</h3>
                    <div className="modal-action flex-col">
                        <div>
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
                                    <input 
                                    type="email" 
                                    defaultValue={loginEmail}
                                    readOnly
                                    {...register("email", )} placeholder="email" className="input input-bordered" />
                                    {/* {errors.email && <span className='text-red-600'>Email is required</span>} */}
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
                                        placeholder="photo"
                                        className="file-input file-input-bordered w-full "
                                    />
                                    {errors.photo && <span className='text-red-600'>Photo is required</span>}
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
                                <label className="form-control w-full lg:col-span-2">
                                    <div className="label">
                                        <span className="label-text">Select Your Designation</span>
                                    </div>
                                    <select className="select select-bordered"
                                        {...register("designation", { required: true })}
                                    >
                                        <option value="web developer">Web developer</option>
                                        <option value="digital marketer">Digital Marketer</option>
                                        <option value="graphics">Graphics Designer</option>
                                    </select>
                                    {errors.designation && <span className='text-red-600'>designation is required</span>}
                                </label>

                                <div className="form-control mt-6 lg:col-span-2 w-full">
                                    <button className="btn btn-outline border-primary-color  hover:bg-primary-color hover:text-white ">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <form method="dialog" className="px-6 mx-auto">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn w-full bg-primary-color text-white hover:text-black hover:border-primary-color">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default GoogleLogin;