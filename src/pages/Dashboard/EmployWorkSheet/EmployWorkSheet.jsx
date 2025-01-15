import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const EmployWorkSheet = () => {
    const { register, handleSubmit, setValue, reset, watch } = useForm({
        defaultValues: {
            task: "Sales",
            hours: 0,
            date: new Date(),
        },
    });
    // const [tasks, setTasks] = useState([]);
    const [modalData, setModalData] = useState(null);
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()

    const selectedDate = watch("date");

    // data show
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['work-sheet'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/work-sheet/${user?.email}`);
            const sortedTasks = res?.data.sort((a, b) => b.taskId - a.taskId);
            return sortedTasks;
        }
    })

    const onSubmit = (data) => {
        const newTask = {
            taskId: tasks.length + 1,
            task: data.task,
            hours: parseInt(data.hours, 10),
            date: data.date,
            employEmail: user?.email
        };
        // Save to DB (e.g., use Axios to POST data to your API)
        axiosPublic.post('/work-sheet', newTask)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Task added successfully", {
                        duration: 4000,
                        position: 'top-center',
                    })
                    reset();
                    refetch()
                }
            })
        // 
    };

    // Update Task
    const handleUpdateTask = (e) => {
        e.preventDefault();

        // axiosPublic.patch(`/work-sheet/${modalData.taskId}`, updateTask)
        //     .then((res) => {
        //         if (res.data.insertedId) {
        //             toast.success("Task added successfully", {
        //                 duration: 4000,
        //                 position: 'top-center',
        //             })
        //             // reset();
        //             refetch()
        //             // setModalData(null);
        //         }
        //     })

        // const updatedTasks = tasks.map((t) =>
        //     t.id === modalData.id ? modalData : t
        // );
        // setTasks(updatedTasks);

    };

    // Delete Task
    const handleDeleteTask = (id) => {
        axiosPublic.delete(`/work-sheet/${id}`)
            .then((res) => {
                if (res.data.deletedCount > 0) {
                    toast.error("deleted task successfully", {
                        duration: 4000,
                        position: 'top-center',
                    })
                    refetch();
                }
            })

    };

    return (
        <div className="p-4">
            {/* Form */}
            <form
                className="flex flex-col md:flex-row gap-4 items-center mb-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <select
                    className="select select-bordered"
                    {...register("task")}
                >
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>
                <input
                    type="number"
                    className="input input-bordered"
                    placeholder="Hours Worked"
                    {...register("hours", { required: true, min: 1 })}
                />
                <DatePicker
                    className="input input-bordered"
                    selected={selectedDate}
                    onChange={(date) => setValue("date", date)}
                />
                <button className="btn btn-primary" type="submit">
                    Add
                </button>
            </form>

            {/* Table */}
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Hours Worked</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <tr key={t._id}>
                            <td>{t.task}</td>
                            <td>{t.hours}</td>
                            <td>{new Date(t.date).toLocaleDateString()}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-info mr-2"
                                    onClick={() => setModalData(t)}
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className="btn btn-sm btn-error"
                                    onClick={() => handleDeleteTask(t._id)}
                                >
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {modalData && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Task</h3>
                        <form onSubmit={() => handleUpdateTask()} className="mt-4">
                            <select
                                className="select select-bordered w-full mb-2"
                                defaultValue={modalData.task}
                                name="tasks"
                            >
                                <option defaultValue="Sales">Sales</option>
                                <option defaultValue="Support">Support</option>
                                <option defaultValue="Content">Content</option>
                                <option defaultValue="Paper-work">Paper-work</option>
                            </select>
                            <input
                                type="number"
                                className="input input-bordered w-full mb-2"
                                defaultValue={modalData.hours}
                                name="hours"
                            />
                            <DatePicker
                                className="input input-bordered w-full"
                                selected={new Date(modalData.date)}
                                name="date"
                            />
                            <button
                                className="btn btn-primary"
                                onClick={handleUpdateTask}
                            >
                                Update
                            </button>
                        </form>
                        <div className="modal-action">

                            <button
                                className="btn"
                                onClick={() => setModalData(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployWorkSheet;
