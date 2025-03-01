
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts"
import Spinner from "../../Shared/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAllUsers from "../../../hooks/useAllUsers";

const EmployDetails = () => {
    const { slug } = useParams()
    const [allUser] = useAllUsers()
    const findDetails = allUser?.find((i) => i._id === slug);
    
    const axiosSecure = useAxiosSecure()
    const { data: payData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['payData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payroll/${findDetails?.email}`);
            return res.data;
        }
    })
    if(loading){
        return <Spinner></Spinner>
    }
    
    return (
        <div>
            {
                payData < 1 ? <p className="text-5xl text-red-700 my-48 text-center">NO DATA AVILABLE</p> : 
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-24">
                    <div>
                        <div className="card   shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={payData[0]?.image}
                                    alt={payData[0]?.name}
                                    className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{payData[0]?.name}</h2>
                                <p><strong>Designation: </strong>{payData[0]?.designation}</p>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={payData}>
                                <YAxis dataKey="salary" />
                                <Tooltip></Tooltip>
                                <XAxis dataKey="date"></XAxis>
                                <Legend></Legend>
                                <Bar dataKey="salary" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            }
        </div>
    );
};

export default EmployDetails;