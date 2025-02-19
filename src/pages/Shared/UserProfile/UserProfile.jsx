import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAllUsers from "../../../hooks/useAllUsers";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    const [allUser] = useAllUsers()
    const filterData = allUser.find((item) => item?.email === user?.email)

    return (
        <div className="flex flex-col justify-center ">
            <img className="w-[200px] h-[200px] object-cover rounded-full " src={filterData?.image} alt="Profile Image" />
            <div>
                <h2 className="text-2xl font-semibold mt-4">{filterData?.name}</h2>
                <p ><span className="capitalize ">{filterData?.designation}</span></p>
                <p ><span className="font-bold capitalize">role:</span> <span className=" capitalize ">{filterData?.role}</span></p>
            </div>
            <div className="border border-white w-full my-5 "></div>
        </div>
    );
};

export default UserProfile;