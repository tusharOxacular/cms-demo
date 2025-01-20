import InputCheckBox from "@/components/atoms/InputFields/InputCheckBox";

type TableHeadProps = {
  name: string[];
};

function TableHead({ name }: TableHeadProps) {
  return (
    <tr>
      {/* <th scope="col" className="p-4">
        <InputCheckBox name="checkbox" />
      </th> */}
      {name.map((header, index) => (
        <th scope="col" className="px-6 py-3" key={index}>
          {header}
        </th>
      ))}
    </tr>
  );
}

export default TableHead;
