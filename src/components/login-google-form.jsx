import iconGoogle from "../../public/icons8-google.svg";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const LoginGoogleForm = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Увійшов користувач:", {
        email: user.email,
        name: user.displayName,
        uid: user.uid,
      });

      // Переходимо до головної сторінки
      navigate("/");
    } catch (error) {
      console.error("Помилка входу:", error);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto text-sm shadow-md bg-[var(--form-bg-color)] p-7">
        <h1 className="text-center font-bold text-3xl mb-2">Sign in</h1>
        <p className="text-center mb-4">to your account</p>
        <form onSubmit={(e) => e.preventDefault()} className="text-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="px-2 py-1 border border-b-gray-400 rounded-md font-bold flex items-center gap-x-3 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
          >
            <img src={iconGoogle} alt="icon-google" className="w-8 h-8" />
            Sign in with Google
          </button>
        </form>
      </div>
    </section>
  );
};
