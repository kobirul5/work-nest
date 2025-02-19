import { useContext } from "react";
import { FaEdit, FaMailBulk, FaPhone } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAllUsers from "../../hooks/useAllUsers";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [allUser] = useAllUsers();
    const filterUser = allUser.find((item) => item?.email === user?.email);
  
    return (
        <div className="flex justify-center items-center py-20 bg-gray-100 min-h-screen">
            <div className="w-96 p-6 bg-white text-gray-800 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex flex-col items-center">
                    <img 
                        src={filterUser?.image} 
                        alt={filterUser?.name} 
                        className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
                    />
                    <h2 className="text-2xl font-bold mt-4">{filterUser?.name}</h2>
                    <p className="text-gray-500">{filterUser?.role}</p>
                </div>
                
                <div className="mt-6 space-y-4 text-gray-700">
                    <div className="flex items-center gap-2 border-b pb-2">
                        <FaMailBulk className="w-5 h-5 text-gray-500" />
                        <span>{filterUser?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 border-b pb-2">
                        <FaPhone className="w-5 h-5 text-gray-500" />
                        <span>{filterUser?.phone || 'N/A'}</span>
                    </div>
                    <div className="mt-6">
                        <button className="bg-[#014E4E] text-white w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg shadow-md hover:bg-[#013737] transition-all">
                            <FaEdit className="w-4 h-4" /> Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
