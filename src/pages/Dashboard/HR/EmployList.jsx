import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from 'react-icons/md';

const EmployList = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allUser = [], isPending: loading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const  handleVerified =(verifiedData)=>{
        console.log(verifiedData)
        axiosSecure.patch(`/users/${verifiedData._id}`)
        .then(res=>{
            console.log(res)
            refetch()
        })
    }

    const handlePay=(id)=>{
        console.log(id)
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
            cell: ({row}) => (row.original.isVerified ? <><button onClick={()=>handleVerified(row.original)}><TiTick className="text-green-600 text-2xl" /></button>
            </> : <>
            <button onClick={()=>handleVerified(row.original)}><MdOutlineCancel className="text-red-600 text-2xl" /></button>
            </>)
        },
        {
            headers: "Bank Account",
            accessorKey: "bankAccountNo"
        },
        {
            headers: "Salary",
            accessorKey: "salary"
        },
        {
            headers: "Pay",
            accessorKey: "pay",
            cell: ({row}) => (
                <button
                    className="btn btn-primary"
                    onClick={() => handlePay(row.original._id)} // Custom function for the Pay button
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
                <button className='btn' onClick={()=>table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()}  onClick={()=>table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()}>Next Page</button>
                <button className='btn' onClick={()=>table.lastPage()}>Last Page</button>
            </div>
        </div>
    );
};

export default EmployList;