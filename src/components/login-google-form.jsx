import iconGoogle from "../../public/icons8-google.svg";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginGoogleForm = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleGoogleLogin = async () => {
    setErrorMsg("");

    // Перевірка до відкриття вікна логіну
    if (!agree) {
      setErrorMsg("Потрібно погодитися з умовами перед реєстрацією.");
      return;
    }

    try {
      const result = await signInWithPopup(auth, provider);
      const isNewUser = getAdditionalUserInfo(result)?.isNewUser;

      console.log("Увійшов користувач:", {
        email: result.user.email,
        name: result.user.displayName,
        uid: result.user.uid,
        isNewUser,
      });

      navigate("/");
    } catch (error) {
      console.error("Помилка входу:", error);
      setErrorMsg("Не вдалося увійти. Спробуйте ще раз.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto text-sm shadow-md bg-[var(--form-bg-color)] p-7">
        <h1 className="text-center font-bold text-3xl mb-2">Sign in</h1>
        <p className="text-center mb-4">to your account</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="text-center mb-3 flex justify-center"
        >
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={`px-2 py-1 border rounded-md font-bold flex items-center gap-x-3 cursor-pointer transition-colors duration-300 ${
              agree
                ? "hover:bg-gray-200 border-b-gray-400"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!agree}
          >
            <img src={iconGoogle} alt="icon-google" className="w-8 h-8" />
            Sign in with Google
          </button>
        </form>

        {/* Згода на умови */}
        <div className="flex gap-x-2 items-center mb-2">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree">
            <a href="/terms" target="_blank" className="hover:underline">
              Умови використання застосунку
            </a>
          </label>
        </div>

        {/* Повідомлення про помилку */}
        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      </div>
    </section>
  );
};
