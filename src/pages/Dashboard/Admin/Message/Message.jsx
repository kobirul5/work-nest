import { useQuery } from "@tanstack/react-query";
import Heading from "../../../Shared/Heading/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Message = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allMessage = [] } = useQuery({
        queryKey: ['allMessage'],
        queryFn: async () => {
            const res = await axiosSecure.get('/massage');
            return res.data;
        }
    })

    return (
        <div className="py-10">
            <div className="text-center">
                <Heading
                    title={"All Massage"}
                ></Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-3 gap-5">
                {
                    allMessage.map((message,idx) => <div key={idx} className="card card-compact shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{message.name}</h2>
                            <p><strong>Email:</strong> {message.email}</p>
                            <p>{message.message}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Message;