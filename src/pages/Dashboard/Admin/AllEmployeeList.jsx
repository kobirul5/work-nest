import { TiTick } from "react-icons/ti";
import useVerifiedUser from "../../../hooks/useVerifiedUser";
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { FaFire } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllEmployeeList = () => {
    const [verifiedUser, refetch] = useVerifiedUser()
    const axiosSecure = useAxiosSecure()

    const handleFired = (fireData) => {
        console.log(fireData)
        axiosSecure.patch(`/users/fired/${fireData._id}`)
            .then(res => {
                console.log(res)
                refetch()
            })
    }


    const handleMakeHR = (data) => {
        console.log(data)
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
            headers: "Designation",
            accessorKey: "designation"
        },
        {
            headers: "HR",
            accessorKey: "makeHR",
            cell: ({ row }) => (row.original.designation === "HR" ? <>
                <p className="text-green-600 text-2xl"><TiTick></TiTick></p>
            </> : <>
                <button
                    className="btn btn-xs"
                    onClick={() => handleMakeHR(row.original)}
                >
                    Make HR
                </button>
            </>)
        },
        {
            headers: "Fire",
            accessorKey: "isFired",
            cell: ({ row }) => (!row.original.isFired ? <>
                <button
                    onClick={() => handleFired(row.original)}
                >
                    <FaFire className="text-red-600 text-2xl" />
                </button>
            </> : <>
                <p>
                    Fired <TiTick className="text-green-600 text-2xl" />
                </p>
            </>)
        },
    ]

    const table = useReactTable({
        data: verifiedUser,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })


    return (
        <div>
            Employ list {verifiedUser.length}

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

export default AllEmployeeList;