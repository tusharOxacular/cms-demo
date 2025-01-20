type ButtonProps = {
  name: string;
  type: "button" | "submit" | "reset";
};

function Button({ name, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      {name}
    </button>
  );
}

export default Button;
