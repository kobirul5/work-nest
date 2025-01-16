import useWorkSheet from "../../../hooks/useWorkSheet";
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import Spinner from "../../Shared/Spinner/Spinner";
import { useMemo, useState } from "react";

const ProgressEmploy = () => {
    const [workSheet, loading, refetch] = useWorkSheet()
    // const [employeeWorkSheet, setEmployWorkSheet] = useState(workSheet)
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    console.log(workSheet)

    const employeeNames = useMemo(()=>{
        return Array.from(
            new Set(workSheet.map((item)=> item.employName || "Unknown"))
        )
    },[workSheet])




    const columns = [
        {
            headers: "Id",
            accessorKey: "id",
            cell: (info) => info.row.index + 1,
        },
        {
            headers: "Name",
            accessorKey: "employName",
        },
        {
            headers: "Email",
            accessorKey: "employEmail"
        },
        {
            Headers: "Task",
            accessorKey: "task"
        },
        {
            Headers: "Hours",
            accessorKey: "hours"
        },
        {
            Headers: "Date",
            accessorKey: "date"
        },

    ]

    const table = useReactTable({
        data: workSheet,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            progress list {workSheet.length}
            <div>
                <select className="select select-primary w-full max-w-xs">
                    {
                        employeeNames.map((i, idx)=><option
                        key={idx}
                         value="Sales"
                         >{i}</option>)
                    }
                </select>
                <select className="select select-primary w-full max-w-xs">
                    {
                        employeeNames.map((i, idx)=><option
                        key={idx}
                         value="Sales"
                         >{i}</option>)
                    }
                </select>
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
            <div>
                <button className='btn' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn' onClick={() => table.lastPage()}>Last Page</button>
            </div>
        </div>
    );
};
export default ProgressEmploy;