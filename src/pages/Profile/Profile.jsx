import { useContext } from "react";
import { FaEdit, FaMailBulk, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAllUsers from "../../hooks/useAllUsers";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [allUser] = useAllUsers();
    const filterUser = allUser.find((item) => item?.email === user?.email);
  
    return (
        <div className="flex justify-center items-center py-16 bg-gray-50 min-h-screen">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <img 
                        src={filterUser?.image || "https://via.placeholder.com/100"} 
                        alt={filterUser?.name} 
                        className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
                    />
                </div>
                <h2 className="text-2xl font-semibold mt-4 text-gray-800">{filterUser?.name || "John Doe"}</h2>
                <p className="text-gray-500 text-sm">{filterUser?.role || "User"}</p>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                    <FaMailBulk className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-700">{filterUser?.email || "Not available"}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                    <FaPhone className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-700">{filterUser?.phone || "Not available"}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                    <FaMapMarkerAlt className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-700">{filterUser?.address || "Not provided"}</span>
                </div>
            </div>

            <div className="mt-6">
                <button className="bg-teal-600 text-white w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-all">
                    <FaEdit className="w-4 h-4" /> Edit Profile
                </button>
            </div>
        </div>
    </div>
    );
};

export default Profile;
