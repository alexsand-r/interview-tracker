import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginGoogleForm } from "./components/login-google-form";

import { Form } from "./components/fofm";
import { InterviewList } from "./components/interview-list/interview-list";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          {/* сторінка авторизації через гугл аккаунт */}
          <Route path="/login" element={<LoginGoogleForm />} />
          {/* домашня сторінка */}
          <Route path="/" element={<InterviewList />} />
          {/* Сторінка форми */}
          <Route path="/form" element={<Form />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
