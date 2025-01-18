import { TiTick } from "react-icons/ti";
import useVerifiedUser from "../../../hooks/useVerifiedUser";
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { FaFire } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Heading from "../../Shared/Heading/Heading";
import Swal from "sweetalert2";

const AllEmployeeList = () => {
    const [verifiedUser, refetch] = useVerifiedUser()
    const axiosSecure = useAxiosSecure()

    const handleFired = (fireData) => {

        Swal.fire({
            title: "Are you sure you want to fire this employee?",
            text: "Once fired, they will no longer be able to log in to their account. This action cannot be undone",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/fired/${fireData._id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        refetch()
                    })
            }
        });
    }


    const handleMakeHR = (hrData) => {
        axiosSecure.patch(`/users/hr/${hrData._id}`, hrData)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success("Update to HR")
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
            headers: "Designation",
            accessorKey: "designation"
        },
        {
            headers: "HR",
            accessorKey: "HR",
            cell: ({ row }) => (row.original.role === "hr" ? <>
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
            accessorKey: "Fired",
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
        <div className="">
            <div className="py-10 text-center">
                <Heading
                    title={"Employee Management Dashboard"}
                    subtile={"View, manage, and update roles for all verified employees seamlessly"}
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
            <div className="space-x-4 mt-5">
                <button className='btn' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn' onClick={() => table.lastPage()}>Last Page</button>
            </div>

        </div>
    );
};

export default AllEmployeeList;