import { useLocation } from "react-router-dom";

export const useNavActive = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path === "/movies") {
      return (
        location.pathname === "/movies" ||
        location.pathname.includes("/details/movie/")
      );
    }

    if (path === "/tv-series") {
      return (
        location.pathname === "/tv-series" ||
        location.pathname.includes("/details/tv/")
      );
    }

    return location.pathname.startsWith(path);
  };

  return { isActive };
};
