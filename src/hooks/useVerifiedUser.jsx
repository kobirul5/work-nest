import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useVerifiedUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: verifiedUser = [], refetch } = useQuery({
        queryKey: ['verifiedUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/verifyUser');
            return res.data;
        }
    })
    return [verifiedUser, refetch]
};

export default useVerifiedUser;