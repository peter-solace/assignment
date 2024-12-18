import React, {useEffect, useState} from "react";

const DEBOUNCE_SEARCH_MS = 300;

export default function SearchForm({value, onChange, className = ""}: {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (internalValue !== value) onChange(internalValue)
    }, DEBOUNCE_SEARCH_MS);
    return () => clearTimeout(handler);
  }, [internalValue, onChange, value]);

  return (
    <form className={`max-w-md p-4 bg-gray-100 rounded shadow ${className}`}>
      <p className="text-lg font-medium text-gray-700 mb-2">Search</p>
      <p className="text-sm text-gray-500 mb-4">
        Searching for: <span className="font-semibold">{value}</span>
      </p>
      <div className="flex items-center gap-2">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          value={internalValue}
          onChange={(e) => setInternalValue(e.target.value)}
          placeholder="Enter search term"
        />
        <button
          className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => setInternalValue("")}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
