"use client";
import React from "react";

interface SearchInputProps {
  query: string;
  isFocused: boolean;
  category: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  isFocused,
  category,
  onInputChange,
  onFocus,
  onBlur,
  onClear,
}) => {
  return (
    <div className="relative flex items-center w-full max-w-2xl mx-auto">
      <div
        className={`relative flex items-center bg-black backdrop-blur-sm rounded-full  transition-all duration-300 w-full ${
          isFocused
            ? "border-gray-600 shadow-lg shadow-black/30"
            : "border-gray-700 hover:border-gray-600"
        }`}
      >
        <input
          type="text"
          value={query}
          onChange={onInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Enter keyword"
          className="w-full pl-6 pr-32 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base font-medium"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-24 px-2 py-1 text-gray-400 hover:text-red-400 transition-colors duration-200 font-bold text-lg"
          >
            ✕
          </button>
        )}

        <button
          type="submit"
          className="absolute right-2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50 font-semibold text-sm shadow-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
