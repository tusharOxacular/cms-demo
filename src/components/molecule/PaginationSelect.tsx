import React from "react";

type SelectInputProps = {
  name: string;
  htmlFor: string;
  option: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const PaginationSelectInput = ({
  name,
  htmlFor,
  option,
  value,
  onChange,
}: SelectInputProps) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{name}</label>
      <select id={htmlFor} value={value} onChange={onChange}>
        {option.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaginationSelectInput;
