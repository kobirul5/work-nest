import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import usePayroll from "../../../hooks/usePayroll";
import { TiTick } from 'react-icons/ti';
import { MdOutlineCancel } from 'react-icons/md';
import Heading from '../../Shared/Heading/Heading';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const PaymentHistory = () => {
    const [paymentData, refetch] = usePayroll()
    const { user } = useContext(AuthContext)
    const filterData = paymentData?.filter((i) => i.paymentStatus === "success")
    const succussPaymentData = filterData?.filter((i) => i?.email === user?.email)


    const columns = [
        {
            headers: " ",
            accessorKey: " ",
            cell: (info) => info.row.index + 1,
        },
        {
            headers: "Date",
            accessorKey: "Date",
            cell: ({ row }) => {
                const formattedDate = new Date(row.original.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                });
                return <p>{formattedDate}</p>;
            }
        },
        {
            Headers: "Salary",
            accessorKey: "Salary",
            cell: ({ row }) => <p>{row.original.salary}</p>
        },
        {
            headers: "transactionID",
            accessorKey: "Transaction ID",
            cell: ({ row }) => <p>{row.original.transactionID}</p>
        },
        {
            headers: "Date",
            accessorKey: "Payment Released",
            cell: ({ row }) => {
                const formattedDate = new Date(row.original?.paymentDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
                return <p>{formattedDate}</p>;
            }
        },

    ]

    const table = useReactTable({
        data: succussPaymentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })


    return (
        <div className='px-8'>
            <div className='text-center mx-auto pt-14 mb-10'>
                <Heading
                    title={"Payment History"}
                    subtile={"Comprehensive Overview of Employee Information and Actions"}
                ></Heading>
            </div>
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='bg-primary-color text-white'>
                        {table.getHeaderGroups().map((headerGroup, idx) => <tr  key={idx}>
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
        </div>
    );
};

export default PaymentHistory;