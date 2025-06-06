import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useStore = create((set) => ({
  //1. масив для зберігання даних
  interviewArr: [
    {
      id: uuidv4(),
      date: "01.02.2025",
      company: "Google",
      statusInterview: "Очікується відповідь",
      notes: "Заява розглядається в продовж 5 днів",
    },
    {
      id: uuidv4(),
      date: "22.07.2025",
      company: "Google",
      statusInterview: "Очікується відповідь",
      notes: "Інформація буде надано додатково",
    },
  ],
}));
export default useStore;
