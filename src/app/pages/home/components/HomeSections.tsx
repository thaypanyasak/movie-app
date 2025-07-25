"use client";
import MovieSlider from "@/app/components/MovieSlider";

export const SectionHeader = ({
  title,

  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: string;
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-white  mb-2 flex items-center gap-3">
      {icon && <span className="text-2xl sm:text-3xl lg:text-4xl">{icon}</span>}
      {title}
    </h2>
  </div>
);

export const TrendingMoviesSection = ({
  movies,
  sliceLimit,
  onCardClick,
  handleBeforeChange,
  handleAfterChange,
}: any) => (
  <section>
    <SectionHeader title="Trending Movies" />
    <div className="relative">
      <MovieSlider
        items={movies}
        isMovie={true}
        sliceLimit={sliceLimit}
        onCardClick={onCardClick}
        settings={{
          beforeChange: handleBeforeChange,
          afterChange: handleAfterChange,
        }}
      />
    </div>
  </section>
);

export const TopRatedMoviesSection = ({
  movies,
  sliceLimit,
  onCardClick,
  handleBeforeChange,
  handleAfterChange,
}: any) => (
  <section>
    <SectionHeader title="Top Rated Movies" />
    <div className="relative">
      <MovieSlider
        items={movies}
        isMovie={true}
        sliceLimit={sliceLimit}
        onCardClick={onCardClick}
        settings={{
          beforeChange: handleBeforeChange,
          afterChange: handleAfterChange,
        }}
      />
    </div>
  </section>
);

export const TrendingTVSection = ({
  tvSeries,
  sliceLimit,
  onCardClick,
  handleBeforeChange,
  handleAfterChange,
}: any) => (
  <section>
    <SectionHeader title="Trending TV Series" />
    <div className="relative">
      <MovieSlider
        items={tvSeries}
        isMovie={false}
        sliceLimit={sliceLimit}
        onCardClick={onCardClick}
        settings={{
          beforeChange: handleBeforeChange,
          afterChange: handleAfterChange,
        }}
      />
    </div>
  </section>
);

export const TopRatedTVSection = ({
  tvSeries,
  sliceLimit,
  onCardClick,
  handleBeforeChange,
  handleAfterChange,
}: any) => (
  <section>
    <SectionHeader title="Top Rated TV Series" />
    <div className="relative">
      <MovieSlider
        items={tvSeries}
        isMovie={false}
        sliceLimit={sliceLimit}
        onCardClick={onCardClick}
        settings={{
          beforeChange: handleBeforeChange,
          afterChange: handleAfterChange,
        }}
      />
    </div>
  </section>
);
