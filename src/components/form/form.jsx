import { useState, useRef, useEffect } from "react";
import MyAirDatepicker from "../my-air-datepicker";
import iconDate from "../../../public/date.svg";
import { Notes } from "./notes";
import { Status } from "./status";
import { Company } from "./company";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import { CancelBtn } from "./btn-cancel";
import { SaveBtn } from "./btn-save";

export const Form = () => {
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const addInterview = useStore((state) => state.addInterview); // додаю
  const navigate = useNavigate();
  const updateInterview = useStore((state) => state.updateInterview); // додаю із сторе updateInterview
  const selectedInterview = useStore((state) => state.selectedInterview); // додаю із сторе selectedInterview
  const setSelectedInterview = useStore((state) => state.setSelectedInterview); // додаю із сторе setSelectedInterview

  const datepickerRef = useRef(null); // Оголошуємо тут
  const clearSearchText = useStore((state) => state.clearSearchText);
  // створюю об'єкт
  const handleInterview = (e) => {
    e.preventDefault();

    const interviewData = {
      date,
      company,
      statusInterview: status,
      notes,
      id: selectedInterview ? selectedInterview.id : undefined,
    };

    if (selectedInterview) {
      updateInterview(interviewData); // Редагування
      setSelectedInterview(null); // Скидаємо після збереження
      clearSearchText(); // очищаю пошук
    } else {
      addInterview(interviewData); // Новий запис
    }

    // Очищаємо форму
    setDate("");
    setCompany("");
    setStatus("");
    setNotes("");
    datepickerRef.current?.clear();

    navigate("/");
  };

  useEffect(() => {
    if (selectedInterview) {
      setDate(selectedInterview.date);
      setCompany(selectedInterview.company);
      setStatus(selectedInterview.statusInterview);
      setNotes(selectedInterview.notes);
    }
  }, [selectedInterview]);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen max-w-md mx-auto">
        {/* onSubmit={handleSubmit} */}
        <form className="w-full" onSubmit={handleInterview}>
          <h1 className="text-2xl mb-2">Add Entry</h1>
          {/* дата */}
          <div className="mb-5 relative">
            <img
              src={iconDate}
              alt="iconDate"
              className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2"
            />
            <MyAirDatepicker
              ref={datepickerRef}
              value={date}
              onDateSelect={(selectedDate) => {
                if (!selectedDate) {
                  setDate("");
                  return;
                }
                const formatted = selectedDate.toLocaleDateString("uk-UA");
                setDate(formatted);
                // console.log("📅 Дата у Form:", formatted);
              }}
            />
          </div>

          {/* компанія */}
          <Company
            company={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          {/* статус */}
          <Status status={status} onChange={(e) => setStatus(e.target.value)} />

          {/* нотатки*/}
          <Notes notes={notes} onChange={(e) => setNotes(e.target.value)} />

          {/* кнопки */}
          <div className="flex gap-4">
            <SaveBtn selectedInterview={selectedInterview} />
            <CancelBtn />
          </div>
        </form>
      </div>
    </>
  );
};
