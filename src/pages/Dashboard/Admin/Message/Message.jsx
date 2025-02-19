import { useQuery } from "@tanstack/react-query";
import Heading from "../../../Shared/Heading/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";

const Message = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allMessage = [] } = useQuery({
    queryKey: ["allMessage"],
    queryFn: async () => {
      const res = await axiosSecure.get("/massage");
      return res.data;
    },
  });

  return (
    <div className="pt-10 px-5 md:px-8">
      <div className="text-center mb-10">
        <Heading title={"All Messages"} />
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {allMessage.map((message, idx) => (
          <motion.div 
            key={idx} 
            className="card bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-body p-6">
              <h2 className="card-title text-lg font-semibold text-gray-800">{message.name}</h2>
              <p className="text-gray-600 text-sm"><strong>Email:</strong> {message.email}</p>
              <p className="text-gray-700 mt-2">{message.message}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Message;