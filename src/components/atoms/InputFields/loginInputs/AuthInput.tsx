interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AuthInput({ name, type, placeholder, value, onChange }: InputProps) {
  return (
    <div className="text-base">
      <label
        htmlFor={name}
        className="block mb-2 font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 focus:border-none focus:outline-none focus:ring-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
}

export default AuthInput;
