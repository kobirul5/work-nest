import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from 'react-hot-toast';
import Heading from '../../Shared/Heading/Heading';
import usePayroll from '../../../hooks/usePayroll';

const PaymentEmployee = () => {
    const axiosSecure = useAxiosSecure()
    const [paymentData, refetch] = usePayroll()


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
            transactionID: `tran${paymentEmploy._id.slice(0,6)}${paymentEmploy.name.slice(0,2)}`,
            paymentStatus: "success",
            date: paymentEmploy.date,
            paymentDate: date
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
            accessorKey: "Name",
            cell: ({row})=> <p>{row.original.name}</p>
        },
        {
            headers: "Email",
            accessorKey: "Email",
            cell: ({row})=> <p>{row.original.email}</p>
        },
        {
            headers: "Designation",
            accessorKey: "Designation",
            cell: ({row})=> <p>{row.original.designation}</p>
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
                const formattedDate = new Date(row.original.paymentDate).toLocaleDateString("en-US", {
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
            <div className='my-14 text-center'>
                <Heading
                title={"Payroll Management System"}
                subtile={"Track, manage, and process employee salaries seamlessly and efficiently."}
                ></Heading>
            </div>

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
            <div className='flex gap-5  my-5'>
                <button className='btn' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn' onClick={() => table.lastPage()}>Last Page</button>
            </div>
            
        </div>
    );
};

export default PaymentEmployee;