import { Link } from "react-router-dom";

export const CancelBtn = () => {
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 font-medium rounded-lg  w-full  px-5 py-1.5 text-center cursor-pointer transition-colors duration-300 text-sm/7"
      >
        <Link to="/" className="block w-full h-full">
          Cancel
        </Link>
      </button>
    </>
  );
};
