
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allUser = [], isLoading,  refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    return [allUser, isLoading, refetch]
};

export default useAllUsers;