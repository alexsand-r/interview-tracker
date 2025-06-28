import iconStatus from "../../../public/status.svg";

export const Status = ({ status, onChange }) => {
  return (
    <>
      <div className="mb-5 relative">
        <img
          src={iconStatus}
          alt="iconDate"
          className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2"
        />
        <input
          type="text"
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg pl-10 pr-8 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-gray-900"
          placeholder="Status"
          name="status"
          value={status} // Привязываем значение поля к состоянию
          onChange={onChange}
        />
        {/* {warn lastName} */}
        {/* <div className="text-red-500 text-sm">{errors.lastName} </div> */}
      </div>
    </>
  );
};
