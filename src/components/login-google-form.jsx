import iconGoogle from "../../public/icons8-google.svg";

export const LoginGoogleForm = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="mx-auto text-sm shadow-md bg-[var(--form-bg-color)] p-7">
          <h1 className="text-center font-bold text-3xl mb-2">Sign in</h1>
          <p className="text-center mb-4">to your account</p>
          <form action="#" className="text-center">
            <button className="px-2 py-1 border border-b-gray-400 rounded-md font-bold flex items-center gap-x-3 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
              <img src={iconGoogle} alt="icon-google" className="w-8 h-8" />
              Sign in with Google
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
