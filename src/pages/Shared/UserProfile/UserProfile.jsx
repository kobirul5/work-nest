import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Spinner from "../Spinner/Spinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();

    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            const filterData = res.data.find((item)=> item?.email === user?.email) 
            console.log(filterData)
            return filterData;
        }
    })

    // console.log(allUser, user)
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div className="flex flex-col justify-center items-center text-center"> 
            <img className="w-[200px] h-[200px] object-cover rounded-full text-center" src={allUser.image} alt="" />
            <h2 className="text-2xl font-semibold">{allUser.name}</h2>
            <p className="text-center"><span className="font-bold">Designation:</span> <span className=" uppercase">{allUser.designation}</span></p>
        </div>
    );
};

export default UserProfile;