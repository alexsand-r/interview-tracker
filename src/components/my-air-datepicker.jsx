import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

const MyAirDatepicker = forwardRef(({ onDateSelect, value }, ref) => {
  const inputRef = useRef(null);
  const dpRef = useRef(null);

  useEffect(() => {
    dpRef.current = new AirDatepicker(inputRef.current, {
      onSelect: ({ date }) => {
        onDateSelect && onDateSelect(date);
      },
      autoClose: true,
      dateFormat: "dd.MM.yyyy",
    });

    return () => dpRef.current?.destroy();
  }, []);

  // 🆕 Встановлюємо значення в input, коли value змінюється
  useEffect(() => {
    if (value && inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = "";
      dpRef.current.clear();
    },
  }));

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Select date"
      className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg pl-10 pr-8 p-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-gray-900"
    />
  );
});

export default MyAirDatepicker;
