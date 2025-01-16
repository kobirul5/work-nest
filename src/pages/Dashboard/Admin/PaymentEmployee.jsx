import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from 'react-hot-toast';

const PaymentEmployee = () => {
    const axiosSecure = useAxiosSecure()
    // const [paymentEmploy, setPaymentEmploy] = useState({})
    const { data: paymentData = [], refetch } = useQuery({
        queryKey: ['payroll'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payroll');
            return res.data;
        }
    })

    const handlePay = (data) => {
            const paymentEmploy = data;
            const date = new Date()
            console.log(date)
        const payrollEmploy = {
            EmployId: paymentEmploy._id,
            name: paymentEmploy.name,
            email: paymentEmploy.email,
            image: paymentEmploy.image,
            role: paymentEmploy.role,
            bankAccountNo: paymentEmploy.bankAccountNo,
            salary: paymentEmploy.salary,
            designation: paymentEmploy.designation,
            paymentStatus: "success",
            date: date
        }
        axiosSecure.patch(`/payroll/${data._id}`, payrollEmploy)
        .then(res=>{
            console.log(res)
            if(res.data.modifiedCount >0){
                refetch()
                toast.success("Send payment Request Successfully")
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
            accessorKey: "name"
        },
        {
            headers: "Email",
            accessorKey: "email"
        },
        {
            headers: "Designation",
            accessorKey: "designation"
        },
        {
            headers: "Date",
            accessorKey: "date",
            cell: ({ getValue }) => {
                const dateValue = getValue(); // Get the raw date value
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
            headers: "Transaction",
            accessorKey: "transaction",
            cell: ({row})=> <p>{row.original._id}</p>
            
        },
        {
            headers: "Pay",
            accessorKey: "pay",
            cell: ({ row }) => (
                row.original.paymentStatus === "success" ? "done": <button 
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
            cell: ({row})=> {
                const formattedDate = new Date(row.original.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }); //
                return row.original.paymentStatus === "success" ? <p>
                    {formattedDate}
                </p>: ""

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
            Employ list {paymentData.length}

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
                <button className='btn' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn' onClick={() => table.lastPage()}>Last Page</button>
            </div>
            
        </div>
    );
};

export default PaymentEmployee;