import InputCheckBox from "@/components/atoms/InputFields/InputCheckBox";

type TableRowData = {
  id: string;
  data: string[];
};

type TableBodyProps = {
  rows?: TableRowData[];
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
};

function TableBody({ rows = [], onEdit, onRemove }: TableBodyProps) {
  return (
    <>
      {rows.map((row) => (
        <tr
          key={row.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          {/* <td className="w-4 p-4">
            <InputCheckBox name={`checkbox-${row.id}`} />
          </td> */}
          {row.data.map((cell, index) => (
            <td
              key={index}
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {cell}
            </td>
          ))}
          <td className="flex items-center px-6 py-4">
            <button
              onClick={() => onEdit?.(row.id)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onRemove?.(row.id)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableBody;
