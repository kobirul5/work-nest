import { useReactTable, flexRender, getCoreRowModel, } from '@tanstack/react-table';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const EmployList = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allUser = [], isPending: loading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const columns = [
        {
            Headers: "Name",
            accessorKey: "name"
        },
        {
            Headers: "Email",
            accessorKey: "email"
        },
        {
            Headers: "Verified",
            accessorKey: "verified"
        },
        {
            Headers: "Bank Account",
            accessorKey: "bankAccountNo"
        },
        {
            Headers: "Salary",
            accessorKey: "salary"
        },
        {
            Headers: "Pay",
            accessorKey: "pay"
        },
        {
            Headers: "Details",
            accessorKey: "Details"
        },
    ]

    const table = useReactTable({ data: allUser, columns, getCoreRowModel: getCoreRowModel() })

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
        </div>
    );
};

export default EmployList;