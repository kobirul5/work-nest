import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAllUsers from "../../../hooks/useAllUsers";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    const [allUser] = useAllUsers()
    const filterData = allUser.find((item) => item?.email === user?.email)

    return (
        <div className="flex flex-row gap-4  items-center pl-2 pr-5 text-gray-300 py-2 rounded-xl bg-[#00383a]">
            <img className="w-[55px] h-[55px] object-cover rounded-xl " src={filterData?.image} alt="Profile Image" />
            <div className="leading-none">
                <h2 className="text-[18px] font-semibold">{filterData?.name}</h2>
                <p ><span className="capitalize text-xs ">{filterData?.designation}</span></p>
                <p ><span className=" capitalize text-xs">role:</span> <span className=" capitalize text-xs">{filterData?.role}</span></p>
            </div>
            {/* <div className="border border-white w-full my-5 "></div> */}
        </div>
    );
};

export default UserProfile;