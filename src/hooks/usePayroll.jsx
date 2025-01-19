
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePayroll = () => {
    const axiosSecure = useAxiosSecure()
    const { data: paymentData = [], refetch } = useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payroll');
            return res.data;
        }
    })
    return [paymentData, refetch]
};

export default usePayroll;