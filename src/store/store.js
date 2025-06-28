import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

// Генеруємо унікальні id один раз
const initialInterviews = [];

const useStore = create((set) => ({
  // 1. масив для зберігання даних
  interviewArr: initialInterviews,

  // 2. функція для додавання у масив
  addInterview: (newInterview) =>
    set((state) => ({
      interviewArr: [...state.interviewArr, { ...newInterview, id: uuidv4() }],
    })),

  // 3. функція для видалення по id
  deleteInterview: (idToDelete) =>
    set((state) => ({
      interviewArr: state.interviewArr.filter(
        (interview) => interview.id !== idToDelete
      ),
    })),

  // 4. функція для оновлення запису
  updateInterview: (updatedInterview) =>
    set((state) => ({
      interviewArr: state.interviewArr.map((item) =>
        item.id === updatedInterview.id ? updatedInterview : item
      ),
    })),

  // 5. selectedInterview для редагування
  selectedInterview: null,

  // 6. встановити selectedInterview
  setSelectedInterview: (interview) =>
    set(() => ({ selectedInterview: interview })),

  //7. фільтрація
  searchText: "",

  setSearchText: (text) => set(() => ({ searchText: text })),

  //8 функція очищює пошук
  clearSearchText: () => set(() => ({ searchText: "" })),
}));

export default useStore;

// {
//   id: uuidv4(),
//   date: "01.02.2025",
//   company: "Google",
//   statusInterview: "Очікується відповідь",
//   notes: "Заява розглядається впродовж 5 днів",
// },
// {
//   id: uuidv4(),
//   date: "22.07.2025",
//   company: "Google",
//   statusInterview: "Очікується відповідь",
//   notes: "Інформація буде надано додатково",
// },
