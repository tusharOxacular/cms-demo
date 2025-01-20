"use client";
import React, { useEffect, useState } from "react";
import TableHead from "@/components/atoms/TableComponents/TableHead";
import TableBody from "@/components/atoms/TableComponents/TableBody";
import GetUsers from "@/api/auth/GetUser";
import Pagination from "@/components/molecule/Pagination";

const cols = ["Name of User", "User Email", "Role", "Action"];

function handleEdit(id: string) {
  console.log(`Edit row with id: ${id}`);
}

function handleRemove(id: string) {
  console.log(`Remove row with id: ${id}`);
}

function manageUsers() {
  const [users, setUsers] = useState<
    { id: string; name: string; email: string; role: string }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const apiUrl = `http://localhost:8001/cms-auth/users?page=${currentPage}&limit=${limit}`;
    GetUsers(apiUrl)
      .then((fetchedData) => {
        setUsers(fetchedData.data); // Set the users
        setTotalPages(fetchedData.meta.totalPages); // Set totalPages from the API response's meta
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, [currentPage, limit]); // Dependency array to trigger fetch on page change

  const rows = users.map((user) => ({
    id: user.id,
    data: [user.name, user.email, user.role],
  }));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit); // Update the limit and trigger the API request with new limit
    setCurrentPage(1); // Reset to the first page when limit changes
  };

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        limit={limit} // Pass the selected limit
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange} // Handle limit change
      />
    </div>
  );
}

export default manageUsers;
