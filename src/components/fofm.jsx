import { Link } from "react-router-dom";
import { useState } from "react";
import MyAirDatepicker from "./my-air-datepicker";
import iconDate from "../../public/date.svg";
import iconCompany from "../../public/company.svg";
import iconStatus from "../../public/status.svg";
import iconNotes from "../../public/notes.svg";

export const Form = () => {
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  //   console.log("дата ", e.target.value);
  // };
  const handleCompany = (e) => {
    setCompany(e.target.value);
    console.log("Company ", e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen max-w-md mx-auto">
        {/* onSubmit={handleSubmit} */}
        <form className="w-full">
          <h1 className="text-2xl mb-2">Add Entry</h1>
          {/* дата */}
          <div className="mb-5 relative">
            <img
              src={iconDate}
              alt="iconDate"
              className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2"
            />
            <MyAirDatepicker />
          </div>

          {/* компанія */}
          <div className="mb-5 relative">
            <img
              src={iconCompany}
              alt="iconDate"
              className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2"
            />
            <input
              type="text"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg pl-10 pr-8 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-gray-900"
              placeholder="Company"
              name="company"
              value={company} // Привязываем значение поля к состоянию
              onChange={handleCompany}
            />
            {/* {warn firstName} */}
            {/* <div className="text-red-500 text-sm">{errors.firstName} </div> */}
          </div>

          {/* статус */}
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
              // value={userData.lastName} // Привязываем значение поля к состоянию
              // onChange={handleChange}
            />
            {/* {warn lastName} */}
            {/* <div className="text-red-500 text-sm">{errors.lastName} </div> */}
          </div>
          {/* нотатки*/}
          <div className="mb-5 relative">
            <img
              src={iconNotes}
              alt="iconDate"
              className="w-5 h-5 absolute top-2  left-2"
            />
            <textarea
              type="text"
              className="w-full h-30 bg-gray-50 border-2 border-gray-200 rounded-lg pl-10 pr-2 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-gray-900"
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
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full  px-5 py-1.5 text-center cursor-pointer transition-colors duration-300 text-sm/7"
            >
              {/* {selectedUser ? "Зберегти" : "Додати"} */}
              Save
            </button>

            <button
              // onClick={resetForm}
              type="button"
              className="text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 font-medium rounded-lg  w-full  px-5 py-1.5 text-center cursor-pointer transition-colors duration-300 text-sm/7"
            >
              <Link to="/" className="block w-full h-full">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
