1. фільтрація по застосунку.
   - у сторе створюю стан для збереження значення
     searchText: "",
   - створюю функцію яка буде змінювати стан
     setSearchText: (text) => set(() => ({ searchText: text })),
2. у компоненті пошуку const Search

   - імпортую стор - import useStore from "../../store/store";
   - створюю функцію const handleSearchText яка буде оновлювати значення searchText: "", у сторе
     const handleSearchText = (e) => {
     const value = e.target.value;
     const trimmedValue = value.trimStart(); // не обрізаємо з кінця, щоб не заважати користувачу
     setInputValue(value); // оновлюємо значення в input
     setSearchText(trimmedValue); // оновлюю значення у сторе searchText: "",
     console.log("Значення у searchText:", trimmedValue); // ← тут лог
     };

- тепер потрібно значення із стор передати у компонент const InterviewList де будуть рендеритись
  отфільтровані елементи згідно пошукового запиту

3.  У компоненті const InterviewList імпортую стор

    - import useStore from "../../store/store"; // імпортую useStore із сторе
    - створюю функцію const filteredInterviews, яка буде повертати отфільтровані елементи

      const filteredInterviews = interviewArr.filter((interview) => {
      const search = searchText.toLowerCase();

             return (
             interview.company.toLowerCase().includes(search) ||
             interview.statusInterview.toLowerCase().includes(search) ||
             interview.notes.toLowerCase().includes(search) ||
             interview.date.includes(searchText)
             );

      });

4.  У компоненті InterviewList у списку викликаю цю функцію
    - <ul className="mt-38 md:mt-0 mb-6 border-l border-r border-gray-300">
         {filteredInterviews.map((interview, index) => (
           <li
             key={interview.id}
             className={`grid grid-row-5 gap-y-3 md:grid-cols-5 text-base text-center bg-white p-1 border-b border-gray-300 ${
               index === 0 ? "border-t" : ""
             }`}
           >
             <div>{interview.date}</div>
             <div>{interview.company}</div>
             <div>{interview.statusInterview}</div>
             <div>{interview.notes}</div>
             <div className="flex items-center justify-center gap-x-5">
               <button
                 className="cursor-pointer"
                 onClick={() => handleEdit(interview)}
               >
                 <img
                   src={pencilIcon}
                   alt="pencil-icon"
                   className="w-6 h-6 hover:bg-slate-50 transition-bg duration-300"
                 />
               </button>
               <button
                 className="cursor-pointer"
                 onClick={() => handleDelete(interview.id)}
               >
                 <img
                   src={cross}
                   alt="pencil-icon"
                   className="w-6 h-6 hover:bg-slate-50 transition-bg duration-300"
                 />
               </button>
             </div>
           </li>
         ))}
       </ul>
