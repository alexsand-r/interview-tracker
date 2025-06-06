import { Link } from "react-router-dom";
export const ButtonAdd = () => {
  return (
    <>
      <button className="text-base capitalize bg-blue-500 text-white px-2 py-1 rounded-md  hover:bg-blue-600  focus:outline-none focus:ring-blue-300 cursor-pointer transition-colors duration-300">
        <Link to="/form" className="block w-full h-full">
          add entry
        </Link>
      </button>
    </>
  );
};
