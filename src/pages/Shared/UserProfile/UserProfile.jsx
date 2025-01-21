import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAllUsers from "../../../hooks/useAllUsers";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const [allUser ] = useAllUsers()
    const filterData = allUser.find((item)=> item?.email === user?.email) 

    return (
        <div className="flex flex-col justify-center items-center text-center"> 
            <img className="w-[200px] h-[200px] object-cover rounded-full text-center" src={filterData?.image} alt="" />
            <h2 className="text-2xl font-semibold">{filterData?.name}</h2>
            <p className="text-center"><span className=" uppercase">{filterData?.designation}</span></p>
            <p className="text-center"><span className="font-bold">Role:</span> <span className=" uppercase">{filterData?.role}</span></p>
        </div>
    );
};

export default UserProfile;