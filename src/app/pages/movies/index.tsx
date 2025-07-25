"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import PageBanner from "../../components/Banner";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Movie } from "../../types/movie";
import { fetchMovies } from "../../utils/api";

import ShowMoreButton from "@/app/components/ShowMoreButton/ShowMoreButton";
import MovieResults from "./components/MovieResults";
import { useMovieHandlers } from "./hooks/useMovieHandlers";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("trending");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [displayCount, setDisplayCount] = useState(25);

  const {
    data: movies = [],
    isLoading: isLoadingMovies,
    error: errorMovies,
    isFetching,
  } = useQuery({
    queryKey: ["movies", searchQuery, searchCategory, currentPage],
    queryFn: () => fetchMovies(searchCategory, searchQuery, currentPage),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: true,
    placeholderData: (previousData) => previousData,
  });

  useEffect(() => {
    if (movies && movies.length > 0) {
      if (currentPage === 1) {
        setAllMovies(movies);
        setDisplayCount(25);
      } else {
        setAllMovies((prev) => {
          const existingIds = new Set(prev.map((movie: Movie) => movie.id));
          const newMovies = movies.filter(
            (movie: Movie) => !existingIds.has(movie.id)
          );
          return [...prev, ...newMovies];
        });
      }
    }
  }, [movies, currentPage]);

  const { handleCardClick, handleSearch, handleInputChange, handleLoadMore } =
    useMovieHandlers(
      setSearchQuery,
      setSearchCategory,
      setInputValue,
      setCurrentPage,
      setAllMovies,
      setDisplayCount,
      displayCount,
      allMovies,
      movies
    );

  const displayedMovies = allMovies.slice(0, displayCount);

  const canShowMore =
    displayCount < allMovies.length ||
    (movies && movies.length >= 20 && !isLoadingMovies);

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <PageBanner title="Movies" type="movie" />

      <div className="container mx-auto px-2 2xl:px-15 ">
        <div className="movies-section mt-8">
          <div className="mb-10 flex justify-start">
            <SearchBar
              onSearch={handleSearch}
              category="movie"
              onInputChange={handleInputChange}
              inputValue={inputValue}
            />
          </div>
          <MovieResults
            isLoading={isLoadingMovies && currentPage === 1}
            error={errorMovies}
            movies={displayedMovies}
            handleCardClick={handleCardClick}
          />

          {canShowMore && (
            <ShowMoreButton
              onLoadMore={handleLoadMore}
              isFetching={isFetching}
              canShowMore={canShowMore}
              increment={25}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
