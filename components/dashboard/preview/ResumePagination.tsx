import React, { useState } from "react";

interface PaginationProps {
  defaultPage?: number;
  totalPages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  defaultPage = 1,
  totalPages = 2,
}) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div dir="ltr" className="flex items-center justify-center space-x-4 p-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center justify-center w-10 h-10 rounded-full
          bg-white border-2 border-gray-200 
          text-gray-600 transition-all duration-200
          hover:border-accent hover:text-accent cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:border-gray-200 disabled:hover:text-gray-600
          focus:outline-none"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        className="flex items-center justify-center min-w-[4rem] px-4 py-2 
        bg-white rounded-full border-2 border-gray-200"
      >
        <span className="text-gray-700 font-medium">{currentPage}</span>
        <span className="text-gray-400 mx-1">/</span>
        <span className="text-gray-500">{totalPages}</span>
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full
          bg-white border-2 border-gray-200 
          text-gray-600 transition-all duration-200
          hover:border-accent hover:text-accent cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:border-gray-200 disabled:hover:text-gray-600
          focus:outline-none"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
