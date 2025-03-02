import useWorkSheet from "../../../hooks/useWorkSheet";
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import Spinner from "../../Shared/Spinner/Spinner";
import { useMemo, useState } from "react";
import Heading from "../../Shared/Heading/Heading";

const ProgressEmploy = () => {
    const [workSheet, loading, refetch] = useWorkSheet()
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");

    const employeeNames = useMemo(() => {
        return Array.from(
            new Set(workSheet.map((item) => item.employName || "Unknown"))
        )
    }, [workSheet])
   


    const filteredWorkSheet = useMemo(() => {
        return workSheet.filter((item) => {
          const byEmployee = selectedEmployee
            ? item.employName === selectedEmployee
            : true;
          const byMonth = selectedMonth
            ? new Date(item.date).getMonth() + 1 === Number(selectedMonth)
            : true;
          return byEmployee && byMonth;
        });
      }, [workSheet, selectedEmployee, selectedMonth]);


    const columns = [
        {
            headers: " ",
            accessorKey: " ",
            cell: (info) => info.row.index + 1,
        },
        {
            headers: "Name",
            accessorKey: "Name",
            cell: ({row})=> <p>{row.original.employName}</p>
        },
        {
            headers: "Email",
            accessorKey: "Email",
            cell: ({row})=> <p>{row.original.employEmail}</p>
        },
        {
            Headers: "Task",
            accessorKey: "Task",
            cell: ({row})=> <p>{row.original.task}</p>
        },
        {
            Headers: "Hours",
            accessorKey: "Hours",
            cell: ({row})=><p>{row.original.hours}</p>
        },
        {
            Headers: "Date",
            accessorKey: "date",
            cell: ({ getValue }) => {
                const dateValue = getValue(); 
                const formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }); 
                return formattedDate;
              },
            
        },

    ]

    const table = useReactTable({
        data: filteredWorkSheet,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    // if (loading) {
    //     return <Spinner></Spinner>
    // }

    return (
        <div className="my-10">
            <div className="text-center my-10">
                <Heading
                title={"Employee Progress Tracker"}
                subtile={"Monitor and Filter Employee Work Records by Name and Month"}
                ></Heading>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
                <select 
                className="select border-primary-color w-full max-w-xs"
                value={selectedEmployee}
                onChange={(e)=> setSelectedEmployee(e.target.value)}
                >
                    <option value="">All Employee</option>
                    {
                        employeeNames.map((i, idx) => <option
                            key={idx}
                            
                        >{i}</option>)
                    }
                </select>
                <select
                    className="select border-primary-color w-full max-w-xs"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="">All Months</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {new Date(0, i).toLocaleString("default", { month: "long" })}
                        </option>
                    ))}
                </select>
                <select
                    className="select border-primary-color w-full max-w-xs"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="year">All Years</option>
                </select>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table border">
                    {/* head */}
                    <thead className="bg-primary-color text-white ">
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
            <div className="flex gap-5 my-5">
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' onClick={() => table.setPageIndex(0)}>First Page</button>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button className='btn bg-primary-color text-white hover:text-black hover:border-primary-color' onClick={() => table.lastPage()}>Last Page</button>
            </div>
        </div>
    );
};
export default ProgressEmploy;