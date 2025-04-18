import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from 'react-icons/md';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import Heading from '../../Shared/Heading/Heading';

const EmployList = () => {
    const axiosSecure = useAxiosSecure()
    const [paymentEmploy, setPaymentEmploy] = useState({})
    const navigate = useNavigate()

    const { data: allUser = [], isLoading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleVerified = (verifiedData) => {
        axiosSecure.patch(`/users/${verifiedData._id}`)
            .then(res => {
                if(res.data.modifiedCount >0){
                    toast.success("Employee Verified")
                    refetch()
                }
            })
    }
    // handle pay
    const handlePay = (e) => {
        e.preventDefault()
        const date = e.target.month.value;
        const payModal = document.getElementById("pay_modal");
         
        const filterData = allUser.find((item) => item?.date === paymentEmploy?.date)

        const payrollEmploy = {
            EmployId: paymentEmploy._id,
            name: paymentEmploy.name,
            email: paymentEmploy.email,
            image: paymentEmploy.image,
            role: paymentEmploy.role,
            bankAccountNo: paymentEmploy.bankAccountNo,
            salary: paymentEmploy.salary,
            designation: paymentEmploy.designation,
            paymentStatus: "pending",
            date: date
        }

        axiosSecure.post('/payroll', payrollEmploy)
        .then(res=>{
            if(res.data.insertedId){
                payModal.close(); 
                toast.success("Send payment Request Successfully")
            }
        })
    }

    const handleDetails =(id)=>{
        navigate(`/dashboard/details/${id}`)
    }
    //  table column
    const columns = [
        {
            headers: " ",
            accessorKey: " ",
            cell: (info) => info.row.index + 1,
        },
        {
            headers: "Name",
            accessorKey: "Name",
            cell: ({row})=> <p>{row.original.name}</p>
        },
        {
            headers: "Email",
            accessorKey: "Email",
            cell: ({row})=> <p>{row.original.email}</p>
        },
        {
            headers: "Verified",
            accessorKey: "Verified",
            cell: ({ row }) => (row.original.isVerified ? <><button onClick={() => handleVerified(row.original)}><TiTick className="text-green-600 text-2xl" /></button>
            </> : <>
                <button onClick={() => handleVerified(row.original)}><MdOutlineCancel className="text-red-600 text-2xl" /></button>
            </>)
        },
        {
            headers: "Bank Account",
            accessorKey: "Bank Account",
            cell: ({row})=> <p>{row.original.bankAccountNo}</p>
        },
        {
            Headers: "Salary",
            accessorKey: "Salary",
            cell: ({row})=> row.original.salary
        },
        {
            headers: "Pay",
            accessorKey: "Pay",
            cell: ({ row }) => (
                <button disabled={!row.original.isVerified}
                    className="btn hover:bg-primary-color hover:text-white text-[#01a1a1] bg-transparent   border-primary-color"
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
                    className="btn bg-primary-color text-white hover:text-black hover:border-primary-color"
                    onClick={() => handleDetails(row.original._id)} // Custom function for the Pay button
                >
                    Details
                </button>

            ),
        },
    ]

    const [pagination, setPagination] = useState({
        pageIndex: 0, 
        pageSize: 5, 
      });
      
    const table = useReactTable({
        data: allUser,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination, 
        state: {
          pagination,
        },
    })

    // if(isLoading){
    //     return <Spinner></Spinner>
    // }

    return (
        <div className='my-14'>
           <div className='text-center mx-auto mb-10'>
            <Heading
            title={"Employee Management Dashboard"}
            subtile={"Comprehensive Overview of Employee Information and Actions"}
            ></Heading>
           </div>

            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='bg-primary-color text-white border'>
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
            <div className='flex gap-4 my-5'>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' onClick={() => table.lastPage()}>Last Page</button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="pay_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">{paymentEmploy?.name}</h3>
                    <p className="py-2 font-bold">Salary- {paymentEmploy?.salary}tk</p>
                    <div className=''>
                        <form onSubmit={handlePay}>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Select month and year</span>
                                </div>
                                <input type="month" defaultValue={new Date().toISOString().slice(0, 7)} name='month' placeholder="Type month" className="input input-bordered border-primary-color input-primary-color w-full " />
                            </label>
                            <input type="submit" className='btn bg-primary-color text-white hover:text-black hover:border-primary-color w-full my-2' />
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn hover:bg-primary-color hover:text-white  border-primary-color">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default EmployList;