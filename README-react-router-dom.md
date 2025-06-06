# ⚒️ налаштовую реак роутер дом

1. npm install react-router-dom
2. у Арр імпортую
   import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // у Арр
3. структура для Арр

   <Router basename="/">
       <Routes>
         <Route path="/" element={<InterviewList />} />
       </Routes>
   </Router>

4. у компоненті де (наприклад кнопка при клікі на яку здійснюється перехід)
   import { Link } from "react-router-dom";

    <button className="text-base capitalize bg-blue-500 text-white px-2 py-1 rounded-md  hover:bg-blue-600  focus:outline-none focus:ring-blue-300 cursor-pointer transition-colors duration-300">
        <Link to="/form" className="block w-full h-full">
          + add entry
        </Link>
    </button>
