import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase"; // Імпортуй db
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

const initialInterviews = [];

const useStore = create((set, get) => ({
  // 🔹 1. масив для зберігання даних
  interviewArr: initialInterviews,

  // 🔹 2. функція для додавання у масив (локально)
  addInterview: (newInterview) =>
    set((state) => ({
      interviewArr: [...state.interviewArr, { ...newInterview, id: uuidv4() }],
    })),

  // 🔹 3. функція для видалення по id (і з Firestore, і з локального стану)
  deleteInterview: async (idToDelete) => {
    try {
      const uid = get().userId;
      if (!uid) {
        console.error("Користувач не авторизований — не можна видалити");
        return;
      }

      // Видаляємо з Firestore
      await deleteDoc(doc(db, "users", uid, "interviews", idToDelete));

      // Видаляємо з локального Zustand-стану
      set((state) => ({
        interviewArr: state.interviewArr.filter(
          (interview) => interview.id !== idToDelete
        ),
      }));
    } catch (error) {
      console.error("Помилка видалення інтерв’ю з Firestore:", error);
    }
  },

  // 🔹 4. функція для оновлення запису
  updateInterview: (updatedInterview) =>
    set((state) => ({
      interviewArr: state.interviewArr.map((item) =>
        item.id === updatedInterview.id ? updatedInterview : item
      ),
    })),

  // 🔹 5. selectedInterview для редагування
  selectedInterview: null,

  // 🔹 6. встановити selectedInterview
  setSelectedInterview: (interview) =>
    set(() => ({ selectedInterview: interview })),

  // 🔹 7. фільтрація
  searchText: "",

  setSearchText: (text) => set(() => ({ searchText: text })),

  // 🔹 8. функція очищює пошук
  clearSearchText: () => set(() => ({ searchText: "" })),

  // 🔹 9. зберігаємо userId авторизованого користувача
  userId: null,
  setUserId: (uid) => set(() => ({ userId: uid })),

  // 🔹 10. завантаження інтерв’ю з Firestore
  loadInterviews: async (uid) => {
    try {
      const q = query(collection(db, "users", uid, "interviews"));
      const querySnapshot = await getDocs(q);
      const loaded = [];
      querySnapshot.forEach((doc) => {
        loaded.push({ id: doc.id, ...doc.data() });
      });
      set({ interviewArr: loaded }); // Оновлюємо стан
    } catch (error) {
      console.error("Помилка завантаження інтерв’ю:", error);
    }
  },
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
