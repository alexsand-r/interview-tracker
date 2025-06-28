import iconNotes from "../../../public/notes.svg";

export const Notes = ({ notes, onChange }) => {
  return (
    <div className="mb-5 relative">
      <img
        src={iconNotes}
        alt="iconDate"
        className="w-5 h-5 absolute top-2  left-2"
      />
      <textarea
        type="text"
        className="w-full h-30 bg-gray-50 border-2 border-gray-200 rounded-lg pl-10 pr-2 py-1 focus:border-blue-500 focus:outline-2 focus:outline-blue-200 text-gray-900"
        placeholder="Notes"
        name="notes"
        value={notes}
        onChange={onChange}
      />
    </div>
  );
};
