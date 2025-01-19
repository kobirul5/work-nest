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


    const handleNewSalary = (e) => {
        e.preventDefault();
        const newSalary = e.target.newSalary.value;
        setNewSalary(newSalary)
        const payModal = document.getElementById("my_modal_2");
        payModal.close(); 
    }
console.log(newSalary)
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
            salary: newSalary || paymentEmploy.salary,
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
            headers: "Id",
            accessorKey: "id",
            cell: (info) => info.row.index + 1,
        },
        {
            headers: "Name",
            accessorKey: "Name",
            cell: ({ row }) => <p>{row.original.name}</p>
        },
        {
            headers: "Email",
            accessorKey: "Email",
            cell: ({ row }) => <p>{row.original.email}</p>
        },
        {
            headers: "Designation",
            accessorKey: "Designation",
            cell: ({ row }) => <p>{row.original.designation}</p>
        },
        {
            headers: "Date",
            accessorKey: "Date",
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
            accessorKey: "salary",

        },
        {
            headers: "Salary",
            accessorKey: "Adjust Salary",
            cell: ({ row }) => <button  onClick={() => document.getElementById('my_modal_2').showModal()} ><FaEdit></FaEdit> </button>

        },
        {
            headers: "Transaction",
            accessorKey: "transaction",
            cell: ({ row }) => <p>{row.original._id}</p>

        },
        {
            headers: "Pay",
            accessorKey: "Pay",
            cell: ({ row }) => (
                row.original.paymentStatus === "success" ? <p>Paid</p> : <button
                    className="btn btn-primary"
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

            <div className="overflow-x-auto">
                <table className="table table-auto w-full">
                    {/* head */}
                    <thead>
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
                <button className='btn' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn' onClick={() => table.lastPage()}>Last Page</button>
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