import React from "react";
import PaginationSelectInput from "@/components/molecule/PaginationSelect";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void; // New prop to handle limit changes
  limit: number; // New prop for the selected limit
};

const options = ["2", "5", "10", "15", "20"];

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onLimitChange,
  limit,
}: PaginationProps) => {
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLimit = parseInt(event.target.value, 10);
    onLimitChange(selectedLimit); // Update the selected limit
  };
  return (
    <>
      <div aria-label="Page navigation example" className="mt-4">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              onClick={() =>
                onPageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => onPageChange(index + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === index + 1
                    ? "text-blue-600 border border-gray-300 bg-blue-200 hover:bg-blue-100"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={() =>
                onPageChange(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
        <div className="flex justify-self-end align-middle">
          <PaginationSelectInput
            name="Select"
            htmlFor="limitSelect"
            option={options}
            value={limit.toString()}
            onChange={handleLimitChange} // Update the limit when user selects a new value
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
