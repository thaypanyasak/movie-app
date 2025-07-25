import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TVSeries } from "@/app/types/tvSeries";

export function useTVSeriesHandlers(
  setSearchQuery: (q: string) => void,
  setSearchCategory: (c: string) => void,
  setInputValue: (v: string) => void,
  setCurrentPage: (page: number | ((prev: number) => number)) => void,
  setAllTVSeries: (
    tvSeries: TVSeries[] | ((prev: TVSeries[]) => TVSeries[])
  ) => void,
  setDisplayCount: (count: number) => void,
  displayCount: number,
  allTVSeries: TVSeries[],
  tvSeries: TVSeries[] | undefined
) {
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (tv: TVSeries) => {
      navigate(`/details/tv/${tv.id}`);
    },
    [navigate]
  );

  const handleSearch = useCallback(
    (query: string, category: string) => {
      setSearchQuery(query);
      setSearchCategory(category);
      setCurrentPage(1);
      setAllTVSeries([]);
      setDisplayCount(25);
    },
    [
      setSearchQuery,
      setSearchCategory,
      setCurrentPage,
      setAllTVSeries,
      setDisplayCount,
    ]
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
    },
    [setInputValue]
  );

  const handleLoadMore = useCallback(() => {
    const newDisplayCount = displayCount + 25;

    // If we need more data and don't have enough TV series
    if (
      newDisplayCount > allTVSeries.length &&
      tvSeries &&
      tvSeries.length === 20
    ) {
      setCurrentPage((prev) => prev + 1);
    }

    setDisplayCount(newDisplayCount);
  }, [
    displayCount,
    allTVSeries.length,
    tvSeries,
    setCurrentPage,
    setDisplayCount,
  ]);

  return {
    handleCardClick,
    handleSearch,
    handleInputChange,
    handleLoadMore,
  };
}
