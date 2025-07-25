export type TVSeries = {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date: string;
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
    results: TVSeries[];
  };
};
