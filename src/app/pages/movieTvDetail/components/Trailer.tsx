"use client";

import StatusMessage from "@/app/components/StatusMessage";
import { fetchMovieDetail, fetchTVDetail } from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const TrailerList: React.FC = () => {
  const { id, type } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [type, id],
    queryFn: () => {
      if (type === "movie") {
        return fetchMovieDetail(id as string);
      } else if (type === "tv") {
        return fetchTVDetail(id as string);
      }
      return null;
    },
    enabled: !!id && !!type,
  });

  if (isLoading) {
    return <StatusMessage loading loadingText="Loading trailers..." />;
  }

  if (error) {
    return <StatusMessage error={error} errorText="Error loading trailers" />;
  }

  const videos = data?.videos?.results || [];

  const videoTypes = [
    { type: "Trailer", title: "Official Movie Trailer" },
    { type: "Teaser", title: "Exclusive Teaser Preview" },
    { type: "Clip", title: "Featured Movie Clips" },
    { type: "Behind The Scenes", title: "Behind The Scenes Content" },
    { type: "Featurette", title: "Special Documentary Featurette" },
    { type: "Music Video", title: "Official Music Videos" },
  ];

  return (
    <div className="mt-6 space-y-12 bg-[#0f0f0f] pb-16">
      {videoTypes.map(({ type, title }) => {
        const video = videos.find((v: any) => v.type === type);

        if (!video) {
          return null;
        }

        return (
          <div key={type} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl text-white font-bold mb-2 text-center">
                {title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="flex justify-center px-4">
              <div className="w-full max-w-5xl">
                <div className="relative group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform group-hover:scale-[1.02] border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${video.key}?rel=0&modestbranding=1&showinfo=0`}
                        title={video.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-3xl"
                      ></iframe>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrailerList;
