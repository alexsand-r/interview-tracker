// src/components/form/Form.jsx
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
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const addInterview = useStore((state) => state.addInterview);
  const updateInterview = useStore((state) => state.updateInterview);
  const selectedInterview = useStore((state) => state.selectedInterview);
  const setSelectedInterview = useStore((state) => state.setSelectedInterview);
  const clearSearchText = useStore((state) => state.clearSearchText);
  const datepickerRef = useRef(null);
  const navigate = useNavigate();

  const handleInterview = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      alert("Користувач не авторизований");
      return;
    }

    const interviewData = {
      date,
      company,
      statusInterview: status,
      notes,
      uid: user.uid, // зв'язуємо інтерв'ю з користувачем
    };

    try {
      if (selectedInterview) {
        // Оновлення
        interviewData.id = selectedInterview.id;

        await setDoc(
          doc(db, "users", user.uid, "interviews", selectedInterview.id),
          interviewData
        );

        updateInterview(interviewData);
        setSelectedInterview(null);
        clearSearchText();
      } else {
        // Додавання нового
        const newId = uuidv4();
        const interviewWithId = { ...interviewData, id: newId };

        await setDoc(
          doc(db, "users", user.uid, "interviews", newId),
          interviewWithId
        );

        addInterview(interviewWithId);
      }

      // Очищення форми
      setDate("");
      setCompany("");
      setStatus("");
      setNotes("");
      datepickerRef.current?.clear();

      navigate("/");
    } catch (error) {
      console.error("Помилка збереження:", error);
    }
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
    <div className="flex items-center justify-center min-h-screen max-w-md mx-auto">
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

        {/* нотатки */}
        <Notes notes={notes} onChange={(e) => setNotes(e.target.value)} />

        {/* кнопки */}
        <div className="flex gap-4">
          <SaveBtn selectedInterview={selectedInterview} />
          <CancelBtn />
        </div>
      </form>
    </div>
  );
};
