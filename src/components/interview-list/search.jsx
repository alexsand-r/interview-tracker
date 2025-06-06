//-- search.jsx
import search from "../../../public/search.svg";

import { useEffect, useState } from "react";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchText = (e) => {
    const value = e.target.value;
    const trimmedValue = value.trimStart(); // не обрізаємо з кінця, щоб не заважати користувачу
    setInputValue(value); // оновлюємо значення в input
    sessionStorage.setItem("searchText", trimmedValue); // зберігаємо в sessionStorage
    console.log(trimmedValue);
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative">
        <input
          value={inputValue}
          onChange={handleSearchText}
          className="pl-10 text-base bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 w-full flex  px-2.5 py-0.5"
          name="search"
          type="search"
          id="search"
          placeholder="Search"
        />
        <img
          src={search}
          alt="icon-search"
          className="w-6 h-6 absolute top-1/2 left-2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};
