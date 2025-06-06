import { useEffect, useRef } from "react";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export default function MyAirDatepicker({ onDateSelect }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const dp = new AirDatepicker(inputRef.current, {
      onSelect: ({ date }) => {
        onDateSelect && onDateSelect(date);
      },
      autoClose: true,
      dateFormat: "dd.MM.yyyy",
    });

    return () => dp.destroy(); // Очистка при размонтировании
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Select date"
      className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg pl-10 pr-8 p-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-gray-900"
    />
  );
}
