"use client";
import StatusMessage from "@/app/components/StatusMessage";
import { Movie } from "@/app/types/movie";
import { TVSeries } from "@/app/types/tvSeries";
import Image from "next/image";
import React from "react";

interface DetailBannerProps {
  movie: Movie | TVSeries;
}

const DetailBanner: React.FC<DetailBannerProps> = ({ movie }) => {
  if (!movie) {
    return <StatusMessage notFound notFoundText="No movie available" />;
  }

  const isMovie = "title" in movie;

  return (
    <div className="w-full min-h-[800px] relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            background: movie.backdrop_path
              ? `#0f0f0f url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) no-repeat center`
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundSize: "100% auto",
            width: "100%",
            height: "95%",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to top,
              rgba(15,15,15,1) 0%,
              rgba(15,15,15,1) 10%,
              rgba(15,15,15,1) 20%,
              rgba(15,15,15,1) 30%,
              rgba(15,15,15,1) 40%,
              rgba(15,15,15,1) 50%,
              rgba(15,15,15,0.85) 60%,
              rgba(15,15,15,0.45) 80%,
              rgba(15,15,15,0) 100%
            )`,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-30 text-white w-full h-full">
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center mr-10">
          {movie.poster_path ? (
            <Image
              className="rounded-4xl shadow-lg max-h-150 object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={isMovie ? movie.title : movie.name}
              width={400}
              height={600}
              priority
            />
          ) : (
            <div className="w-64 h-80 bg-gray-600 rounded-md flex items-center justify-center">
              <span className="text-gray-300">No Image</span>
            </div>
          )}
        </div>

        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {isMovie ? movie.title : movie.name}
          </h1>

          <div className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl mx-auto lg:mx-0 opacity-90 leading-relaxed ">
            {movie.genres.length > 0 ? (
              movie.genres.map((genre, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-600 text-white border-2 rounded-full px-4 py-2 mr-2 mb-2 text-sm"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="inline-block bg-gray-600 text-white border-2 rounded-full px-4 py-2 text-sm">
                No genres available
              </span>
            )}
          </div>

          <p className="text-lg md:text-sm text-white mb-8 max-w-3xl mx-auto lg:mx-0  leading-relaxed">
            {movie.overview || "No description available"}
          </p>

          <div className="mt-6">
            <h3 className="text-xl text-white font-semibold">Cast</h3>
            <div className="flex space-x-4 mt-2">
              {movie.credits.cast?.slice(0, 5).map((actor) => (
                <div key={actor.id} className="text-center">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="w-32 h-48 object-cover rounded-lg"
                    width={128}
                    height={192}
                  />
                  <p className="text-white text-sm mt-2">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
