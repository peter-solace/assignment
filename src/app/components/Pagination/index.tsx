import React from "react";
import {PaginationMeta} from "@/types/PaginationMeta";

export default function Pagination({page, onChange, meta}: {
  page: number,
  onChange: (page: number) => void,
  meta: PaginationMeta
}) {
  const prev = () => {
    if (page > 1) onChange(page - 1);
  };

  const next = () => {
    if (page < meta.totalPages) onChange(page + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button
        className={`px-4 py-2 rounded ${
          page === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={prev}
        disabled={page === 1}
      >
        Back
      </button>

      <span className="text-gray-700">
        Page <strong>{page}</strong> of <strong>{meta.totalPages}</strong>
      </span>

      <button
        className={`px-4 py-2 rounded ${
          page === meta.totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={next}
        disabled={page === meta.totalPages}
      >
        Next
      </button>
    </div>
  );
}