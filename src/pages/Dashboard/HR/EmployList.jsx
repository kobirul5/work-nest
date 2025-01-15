import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from 'react-icons/md';
import Swal from 'sweetalert2'
import { useState } from 'react';
import toast from 'react-hot-toast';

const EmployList = () => {
    const axiosSecure = useAxiosSecure()
    const [paymentEmploy, setPaymentEmploy] = useState({})

    const { data: allUser = [], isPending: loading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleVerified = (verifiedData) => {
        console.log(verifiedData)
        axiosSecure.patch(`/users/${verifiedData._id}`)
            .then(res => {
                console.log(res)
                refetch()
            })
    }

    const handlePay = (e) => {
        e.preventDefault()
        const date = e.target.month.value;
        const payModal = document.getElementById("pay_modal");
        const payrollEmploy = {
            EmployId: paymentEmploy._id,
            name: paymentEmploy.name,
            email: paymentEmploy.email,
            image: paymentEmploy.image,
            role: paymentEmploy.role,
            bankAccountNo: paymentEmploy.bankAccountNo,
            salary: paymentEmploy.salary,
            designation: paymentEmploy.designation,
            date: date
        }
        axiosSecure.post('/payroll', payrollEmploy)
        .then(res=>{
            console.log(res.data)
            payModal.close(); 
        })


        // toast.success("hi")

    }

    // const handleDetails =()=>{

    // }

    const columns = [
        {
            headers: "Id",
            accessorKey: "id",
            cell: (info) => info.row.index + 1,
        },
        {
            headers: "Name",
            accessorKey: "name"
        },
        {
            headers: "Email",
            accessorKey: "email"
        },
        {
            headers: "Verified",
            accessorKey: "isVerified",
            cell: ({ row }) => (row.original.isVerified ? <><button onClick={() => handleVerified(row.original)}><TiTick className="text-green-600 text-2xl" /></button>
            </> : <>
                <button onClick={() => handleVerified(row.original)}><MdOutlineCancel className="text-red-600 text-2xl" /></button>
            </>)
        },
        {
            headers: "Bank Account",
            accessorKey: "bankAccountNo"
        },
        {
            Headers: "Salary",
            accessorKey: "Salary"
        },
        {
            headers: "Pay",
            accessorKey: "pay",
            cell: ({ row }) => (
                <button disabled={!row.original.isVerified}
                    className="btn btn-primary"
                    onClick={() => {
                        setPaymentEmploy(row.original)
                        document.getElementById('pay_modal').showModal()
                    }} // Custom function for the Pay button
                >
                    Pay
                </button>

            ),
        },
        {
            headers: "Details",
            accessorKey: "Details",
            cell: ({ row }) => (
                <button
                    className="btn btn-primary"
                    onClick={() => handleDetails(row.original)} // Custom function for the Pay button
                >
                    Details
                </button>

            ),
        },
    ]

    const table = useReactTable({
        data: allUser,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <div>
            Employ list {allUser.length}

            <div className="overflow-x-auto">
                <table className="table">
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
            <div>
                {/* disabled={!table.getCanPreviousPage()} */}
                {/* disabled={!table.getCanNextPage()} */}
                <button className='btn' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn' onClick={() => table.lastPage()}>Last Page</button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="pay_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{paymentEmploy?.name}</h3>
                    <p className="py-2">Salary- {paymentEmploy?.salary}</p>
                    <div className=''>
                        <form onSubmit={handlePay}>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">month</span>
                                </div>
                                <input type="month" defaultValue={new Date().toISOString().slice(0, 7)} name='month' placeholder="Type month" className="input input-bordered w-full " />
                            </label>
                            <input type="submit" className='btn' />
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default EmployList;