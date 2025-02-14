import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';

const useVerifyAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data: verifyAdmin = [],isLoading, refetch } = useQuery({
        queryKey: ['verifiedAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${user.email}`);
            return res.data;
        }
    })
    
    return [verifyAdmin,isLoading, refetch]
}
export default useVerifyAdmin;