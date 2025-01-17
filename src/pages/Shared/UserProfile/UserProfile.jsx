import { useContext, useMemo } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Spinner from "../Spinner/Spinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAllUsers from "../../../hooks/useAllUsers";

const UserProfile = () => {
    const {user, loading} = useContext(AuthContext)
    const [allUser ,isLoading] = useAllUsers()

    const filterData = allUser.find((item)=> item?.email === user?.email) 

    if(loading || isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className="flex flex-col justify-center items-center text-center"> 
            <img className="w-[200px] h-[200px] object-cover rounded-full text-center" src={filterData.image} alt="" />
            <h2 className="text-2xl font-semibold">{filterData.name}</h2>
            <p className="text-center"><span className="font-bold">Designation:</span> <span className=" uppercase">{filterData.designation}</span></p>
        </div>
    );
};

export default UserProfile;