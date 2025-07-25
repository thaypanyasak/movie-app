"use client";
import { fetchMovieDetail, fetchTVDetail } from "@/app/utils/api";
import React, { useEffect, useState } from "react";

interface TrailerModalProps {
  movieId: number;
  type: "movie" | "tv";
  onClose: () => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({
  movieId,
  type,
  onClose,
}) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        let detail;
        if (type === "movie") {
          detail = await fetchMovieDetail(String(movieId));
        } else {
          detail = await fetchTVDetail(String(movieId));
        }
        const trailer = detail.videos?.results?.find(
          (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailerKey(trailer?.key || null);
      } catch {
        setTrailerKey(null);
      }
    };
    fetchTrailer();
  }, [movieId, type]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#181818] rounded-lg p-4 max-w-4xl w-full mx-4 relative shadow-2xl">
        <button
          className="absolute top-2 right-2 text-white text-2xl hover:text-red-500 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-all duration-200 z-10"
          onClick={onClose}
        >
          ×
        </button>

        {trailerKey ? (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg"
          />
        ) : (
          <div className="text-white text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
            Loading trailer...
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;
