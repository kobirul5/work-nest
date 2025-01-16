import useAxiosSecure from "./useAxiosSecure";

const useWorkSheet = () => {
    const axiosSecure = useAxiosSecure()
    const { data: workSheet = [], isPending: loading, refetch } = useQuery({
        queryKey: ['workSheet'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payroll/${slug}`);
            return res;
        }
    })
    return [workSheet, loading, refetch]
};

export default useWorkSheet;