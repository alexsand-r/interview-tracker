import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { LoginGoogleForm } from "./components/login-google-form";
import { Form } from "./components/form/form";
import { InterviewList } from "./components/interview-list/interview-list";
import { TermsOfUse } from "./components/terms-of-use";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  return (
    <Router basename="/">
      <Routes>
        {!user ? (
          <>
            {/* Якщо не авторизований — маршрут /login */}
            <Route path="/login" element={<LoginGoogleForm />} />
            {/* Перенаправлення усіх інших на /login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/terms" element={<TermsOfUse />} /> {/* ✅ додано */}
          </>
        ) : (
          <>
            {/* Якщо авторизований — домашня сторінка */}
            <Route path="/" element={<InterviewList />} />
            <Route path="/form" element={<Form />} />
            {/* Перенаправлення усіх інших на "/" */}
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/terms" element={<TermsOfUse />} /> {/* ✅ додано */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
