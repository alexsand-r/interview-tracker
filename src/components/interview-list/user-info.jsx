// components/header/user-info.jsx
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

export const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Встановлюємо користувача з Firebase
    setUser(auth.currentUser);
  }, []);

  if (!user) return null;

  return (
    <div className="flex items-center gap-3 text-sm">
      <img
        src={user.photoURL}
        alt="User avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-medium">{user.displayName}</span>
        <span className="text-gray-500">{user.email}</span>
      </div>
    </div>
  );
};
