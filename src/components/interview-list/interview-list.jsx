//  interview-list.jsx
import { ButtonAdd } from "./button-add";
import { Search } from "./search";
import pencilIcon from "../../../public/pencil.svg";
import cross from "../../../public/cross.svg";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export const InterviewList = () => {
  const interviewArr = useStore((state) => state.interviewArr);
  const deleteInterview = useStore((state) => state.deleteInterview);
  const searchText = useStore((state) => state.searchText);
  const loadInterviews = useStore((state) => state.loadInterviews);
  const setUserId = useStore((state) => state.setUserId);

  const navigate = useNavigate();
  const setSelectedInterview = useStore((state) => state.setSelectedInterview);

  useEffect(() => {
    // Відслідковуємо авторизацію користувача
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        loadInterviews(user.uid); // Завантажуємо інтерв’ю з Firestore для цього користувача
      } else {
        // Якщо користувач не авторизований — можна направити на сторінку логіну
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    deleteInterview(id);
    console.log("delete", id);
  };

  const handleEdit = (interview) => {
    setSelectedInterview(interview);
    navigate("/form");
  };

  const filteredInterviews =
    searchText.trim() === ""
      ? interviewArr
      : interviewArr.filter((interview) => {
          const search = searchText.toLowerCase();
          return (
            interview.company.toLowerCase().includes(search) ||
            interview.statusInterview.toLowerCase().includes(search) ||
            interview.notes.toLowerCase().includes(search) ||
            interview.date.includes(searchText)
          );
        });

  return (
    <>
      <section className="mt-10">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-10 bg-white">
          <div className="max-w-[991px] mx-auto px-[15px] mt-3">
            <h1 className="text-2xl capitalize mb-4">my interview tracker</h1>
            <div className=" flex flex-col gap-y-2  items-start sm:flex-row gap-x-5 mb-5">
              <ButtonAdd />
              <Search />
            </div>
          </div>
        </div>

        {/* header */}
        <div className="hidden md:grid grid-cols-5 capitalize text-base text-center bg-slate-50 p-3 rounded-tl-md rounded-tr-md border border-gray-300 mt-30">
          <div>date</div>
          <div>company</div>
          <div>status</div>
          <div>notes</div>
          <div>action</div>
        </div>
        {/* interview-list */}
        <ul className="mt-38 md:mt-0 mb-6 border-l border-r border-gray-300">
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
      </section>
    </>
  );
};
