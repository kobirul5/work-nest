import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from 'react-hot-toast';
import Heading from '../../Shared/Heading/Heading';
import usePayroll from '../../../hooks/usePayroll';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
 
const PaymentEmployee = () => {
    const axiosSecure = useAxiosSecure()
    const [paymentData, refetch] = usePayroll()
    const [newSalary, setNewSalary] = useState(null)
    const [salaryCheck, setSalaryCheck] = useState(null)
    const [isTable, setIsTable] = useState(true)


    const handleNewSalary = (e) => {
        e.preventDefault();
        const payModal = document.getElementById("my_modal_2");
        const updateSalary = parseFloat(e.target.newSalary.value); 
        const currentSalary = parseFloat(newSalary || salaryCheck);
        if (updateSalary < currentSalary) {
            toast.error("Salary adjustment failed! You can only increase the salary, not decrease it.");
            return payModal.close();
        }
        setNewSalary(updateSalary)
        payModal.close();
    }

    const handleModalAndCheck= (data)=>{
        setSalaryCheck(data.salary)
        document.getElementById('my_modal_2').showModal()
    }

    const handlePay = (data) => {
        const paymentEmploy = data;

        const date = new Date()
        const payrollEmploy = {
            EmployId: paymentEmploy._id,
            name: paymentEmploy.name,
            email: paymentEmploy.email,
            image: paymentEmploy.image,
            role: paymentEmploy.role,
            bankAccountNo: paymentEmploy.bankAccountNo,
            salary: newSalary ? newSalary : paymentEmploy.salary,
            designation: paymentEmploy.designation,
            transactionID: `tran${paymentEmploy._id.slice(0, 6)}${paymentEmploy.name.slice(0, 2)}`,
            paymentStatus: "success",
            date: paymentEmploy.date,
            paymentDate: date
        }
        axiosSecure.patch(`/payroll/${data._id}`, payrollEmploy)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success("Send payment Request Successfully")
                    setNewSalary(null)
                }
            })
    }

    const columns = [

        {
            headers: "Name",
            accessorKey: "Name",
            cell: ({ row }) => <p>{row.original.name}</p>
        },
        {
            headers: "Designation",
            accessorKey: "Designation",
            cell: ({ row }) => <p>{row.original.designation}</p>
        },
        {
            headers: "Date",
            accessorKey: "Salary Date",
            cell: ({ row }) => {
                const dateValue = row.original.date; // Get the raw date value
                const formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                }); // Format the date
                return formattedDate;
            },
        },
        {
            headers: "Salary",
            accessorKey: "Salary",
            cell: ({ row }) => row.original.salary

        },
        {
            headers: "Salary",
            accessorKey: "Adjust Salary",
            cell: ({ row }) => <button onClick={() => handleModalAndCheck(row.original)}><FaEdit></FaEdit> </button>

        },
        {
            headers: "Pay",
            accessorKey: "Pay",
            cell: ({ row }) => (
                row.original.paymentStatus === "success" ? <p>Paid</p> : <button
                    className="btn hover:bg-primary-color hover:text-white text-black border-primary-color"
                    onClick={() => handlePay(row.original)}
                >
                    Pay
                </button>

            ),
        },
        {
            headers: "Pay Date",
            accessorKey: "paymentDate",
            cell: ({ row }) => {
                const formattedDate = new Date(row.original.paymentDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }); //
                return row.original.paymentStatus === "success" ? <p>
                    {formattedDate}
                </p> : ""

            },

        },
    ]

    const table = useReactTable({
        data: paymentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })
    return (
        <div>
            <div className='my-14 text-center'>
                <Heading
                    title={"Payroll Management System"}
                    subtile={"Track, manage, and process employee salaries seamlessly and efficiently."}
                ></Heading>
            </div>

            <div className="text-right mb-6">
                <button
                    className="btn btn-outline border-primary-color hover:bg-primary-color"
                    onClick={() => setIsTable(!isTable)}
                >
                    Switch to {isTable ? "Card View" : "Table View"}
                </button>
            </div>
            <div className={`${!isTable && "hidden"} overflow-x-auto`}>
                <div className={`overflow-x-auto`}>
                    <table className="table table-auto w-full border">
                        {/* head */}
                        <thead className="bg-primary-color text-white">
                            {table.getHeaderGroups().map((headerGroup, idx) => <tr key={idx}>
                                {headerGroup.headers.map((header, idx) => <th key={idx}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>)}
                            </tr>)}
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {table.getRowModel().rows.map((row, idx) => <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-wrap gap-5  my-5'>
                    <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' onClick={() => table.setPageIndex(0)}>First Page</button>
                    <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                    <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                    <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' onClick={() => table.lastPage()}>Last Page</button>
                </div>

            </div>

            {/* table layout */}

            <div className={`${isTable && 'hidden'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                {paymentData?.map((employee) => (
                    <div
                        key={employee._id}
                        className="border border-[#096e6e] bg-opacity-90 shadow-md rounded-md p-4 hover:shadow-lg transition "
                    >
                        <h3 className="text-lg font-semibold">{employee.name}</h3>
                        <p className="">{employee.designation}</p>
                        <p>Salary: ${employee.salary}</p>
                        <p>
                            Salary Month:{" "}
                            {employee.paymentDate
                                ? new Date(employee.paymentDate).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                })
                                : "Not Paid"}
                        </p>
                        <p className="">
                            Pay Date:{" "}
                            {employee.paymentDate
                                ? new Date(employee.paymentDate).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })
                                : "Not Paid"}
                        </p>

                        <div className="mt-4 flex justify-between">
                            <button
                                className="btn btn-outline hover:bg-primary-color border-primary-color "
                                onClick={() => handlePay(employee)}
                                disabled={employee.paymentStatus === "success"}
                            >
                                {employee.paymentStatus === "success" ? "Paid" : "Pay"}
                            </button>
                            <button
                                className="btn text-white  bg-primary-color border-primary-color hover:bg-transparent hover:text-black hover:border-primary-color"
                                onClick={() => document.getElementById("my_modal_2").showModal()}
                            >
                                Adjust Salary
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h1 className='text-center text-2xl mb-5'>Add New Money</h1>
                    <form onSubmit={handleNewSalary} className='flex gap-5 justify-center'>
                        <input type="number" className='input input-bordered' name='newSalary' />
                        <input type="submit" className='btn' />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default PaymentEmployee;