interface ButtonProps {
  name: string;
  type: "submit" | "button";
  isLoading: boolean;
}

function AuthButton({ name, type, isLoading }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
    >
      {name}
    </button>
  );
}

export default AuthButton;
