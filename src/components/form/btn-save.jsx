export const SaveBtn = ({ selectedInterview }) => {
  return (
    <>
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full  px-5 py-1.5 text-center cursor-pointer transition-colors duration-300 text-sm/7"
      >
        {selectedInterview ? "update" : "Save"}
        {/* Save */}
      </button>
    </>
  );
};
