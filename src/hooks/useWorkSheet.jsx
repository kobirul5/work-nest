import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWorkSheet = () => {
    const axiosSecure = useAxiosSecure()
    const { data: workSheet = [], isPending: loading, refetch } = useQuery({
        queryKey: ['workSheet'],
        queryFn: async () => {
            const res = await axiosSecure.get('/work-sheet');
            return res.data;
        }
    })
    return [workSheet, loading, refetch]
};

export default useWorkSheet;