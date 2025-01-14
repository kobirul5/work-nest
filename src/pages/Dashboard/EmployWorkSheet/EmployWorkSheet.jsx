import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EmployWorkSheet = () => {
    const { register, handleSubmit, setValue, reset, watch } = useForm({
        defaultValues: {
            task: "Sales",
            hours: 0,
            date: new Date(),
        },
    });
    const [tasks, setTasks] = useState([
        { id: 1, task: "Sales", hours: 8, date: new Date("2025-01-10") },
        { id: 2, task: "Support", hours: 6, date: new Date("2025-01-11") },
        { id: 3, task: "Content", hours: 4, date: new Date("2025-01-12") },
        { id: 4, task: "Paper-work", hours: 5, date: new Date("2025-01-13") },
        { id: 5, task: "Sales", hours: 7, date: new Date("2025-01-14") },
        { id: 6, task: "Support", hours: 3, date: new Date("2025-01-15") },
        { id: 7, task: "Content", hours: 6, date: new Date("2025-01-16") },
        { id: 8, task: "Paper-work", hours: 2, date: new Date("2025-01-17") },
        { id: 9, task: "Sales", hours: 9, date: new Date("2025-01-18") },
        { id: 10, task: "Support", hours: 5, date: new Date("2025-01-19") },
    ] );
    const [modalData, setModalData] = useState(null);

    const selectedDate = watch("date");

    // Add Task
    const onSubmit = (data) => {
        const newTask = {
            id: Date.now(),
            task: data.task,
            hours: parseInt(data.hours, 10),
            date: data.date,
        };
        setTasks([newTask, ...tasks]);
        reset(); // Clear the form
        // Save to DB (e.g., use Axios to POST data to your API)
    };

    // Update Task
    const handleUpdateTask = () => {
        const updatedTasks = tasks.map((t) =>
            t.id === modalData.id ? modalData : t
        );
        setTasks(updatedTasks);
        setModalData(null);
    };

    // Delete Task
    const handleDeleteTask = (id) => {
        const filteredTasks = tasks.filter((t) => t.id !== id);
        setTasks(filteredTasks);
        // Delete from DB (e.g., use Axios to DELETE data from your API)
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
                    Add / Submit
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
                        <tr key={t.id}>
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
                                    onClick={() => handleDeleteTask(t.id)}
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
                        <div className="mt-4">
                            <select
                                className="select select-bordered w-full mb-2"
                                value={modalData.task}
                                onChange={(e) =>
                                    setModalData({ ...modalData, task: e.target.value })
                                }
                            >
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Content">Content</option>
                                <option value="Paper-work">Paper-work</option>
                            </select>
                            <input
                                type="number"
                                className="input input-bordered w-full mb-2"
                                value={modalData.hours}
                                onChange={(e) =>
                                    setModalData({ ...modalData, hours: e.target.value })
                                }
                            />
                            <DatePicker
                                className="input input-bordered w-full"
                                selected={new Date(modalData.date)}
                                onChange={(date) =>
                                    setModalData({ ...modalData, date: date })
                                }
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={handleUpdateTask}
                            >
                                Update
                            </button>
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
