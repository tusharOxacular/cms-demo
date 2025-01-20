"use client";
import TableHead from "@/components/atoms/TableComponents/TableHead";
import TableBody from "@/components/atoms/TableComponents/TableBody";

const cols = ["Name of College", "College URL", "Action"];

const rows = [
  {
    id: "1",
    data: ["Test1", "test1.kapp.com"],
  },
  {
    id: "2",
    data: ["Test2", "test2.kapp.com"],
  },
  { id: "3", data: ["Test3", "test3.kapp.com"] },
];

function handleEdit(id: string) {
  console.log(`Edit row with id: ${id}`);
}

function handleRemove(id: string) {
  console.log(`Remove row with id: ${id}`);
}

function manageUsers() {
  return (
    <div className="relative h-[100vh] overflow-x-auto shadow-md m-2 sm:rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="relative w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableHead name={cols} />
        </thead>

        <tbody className="relative w-full text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableBody rows={rows} onEdit={handleEdit} onRemove={handleRemove} />
        </tbody>
      </table>
    </div>
  );
}

export default manageUsers;
