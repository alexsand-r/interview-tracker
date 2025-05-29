export const Form = () => {
  return (
    <>
      {/* onSubmit={handleSubmit} */}
      <form className="max-w-sm mx-auto">
        {/* дата */}
        <div className="mb-5">
          {/* <input
            type="text"
            className="min-w-[300px] bg-gray-50 border-2 border-blue-300 rounded-lg pl-2 pr-8 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-blue-800"
            placeholder="прізвище"
            name="name"
            value={userData.name} // Привязываем значение поля к состоянию
            onChange={handleChange}
          /> */}
          {/* {warn name} */}
          {/* <div className="text-red-500 text-sm">{errors.name} </div> */}
        </div>

        {/* компанія */}
        <div className="mb-5">
          <input
            type="text"
            className="w-full bg-gray-50 border-2 border-blue-300 rounded-lg pl-2 pr-8 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-blue-800"
            placeholder="Company"
            name="company"
            //value={} // Привязываем значение поля к состоянию
            //onChange={}
          />
          {/* {warn firstName} */}
          {/* <div className="text-red-500 text-sm">{errors.firstName} </div> */}
        </div>

        {/* статус */}
        <div className="mb-5">
          <input
            type="text"
            className="w-full bg-gray-50 border-2 border-blue-300 rounded-lg pl-2 pr-8 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-blue-800"
            placeholder="Status"
            name="status"
            // value={userData.lastName} // Привязываем значение поля к состоянию
            // onChange={handleChange}
          />
          {/* {warn lastName} */}
          {/* <div className="text-red-500 text-sm">{errors.lastName} </div> */}
        </div>
        {/* нотатки*/}
        <div className="mb-5">
          <input
            type="text"
            className="w-full bg-gray-50 border-2 border-blue-300 rounded-lg pl-2 pr-8 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-blue-800"
            placeholder="Notes"
            name="notes"
            // value={userData.password} // Привязываем значение поля к состоянию
            // onChange={handleChange}
          />
          {/* {warn password} */}
          {/* <div className="text-red-500 text-sm">{errors.password} </div> */}
        </div>

        {/* кнопки */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center cursor-pointer transition-colors duration-300"
          >
            {/* {selectedUser ? "Зберегти" : "Додати"} */}
            Save
          </button>

          <button
            // onClick={resetForm}
            type="button"
            className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center cursor-pointer transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
