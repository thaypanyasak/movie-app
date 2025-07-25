export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  credits: {
    cast: { id: number; name: string; profile_path: string }[];
  };
  videos: {
    results: { key: string }[];
  };
  similar: {
    results: Movie[];
  };
};
