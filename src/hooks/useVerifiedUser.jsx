import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useVerifiedUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: verifiedUser = [], isPending: loading, refetch } = useQuery({
        queryKey: ['verifiedUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            const filterData = res.data.filter((i)=>i.isVerified === true)
            return filterData;
        }
    })
    return [verifiedUser, loading, refetch]
};

export default useVerifiedUser;