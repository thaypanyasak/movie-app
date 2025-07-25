import { useState, useEffect, useRef } from "react";

interface UseSearchBarProps {
  onSearch: (query: string, category: string) => void;
  onInputChange?: (value: string) => void;
  inputValue?: string;
}

export const useSearchBar = ({
  onSearch,
  onInputChange,
  inputValue,
}: UseSearchBarProps) => {
  const [query, setQuery] = useState(inputValue || "");
  const [isFocused, setIsFocused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inputValue !== undefined) {
      setQuery(inputValue);
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onInputChange) {
      onInputChange(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (query.trim()) {
      onSearch(query.trim(), "search");
    } else {
      onSearch("", "trending");
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onInputChange) {
      onInputChange("");
    }
    onSearch("", "trending");
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    query,
    isFocused,
    handleInputChange,
    handleSubmit,
    handleClear,
    handleFocus,
    handleBlur,
  };
};
