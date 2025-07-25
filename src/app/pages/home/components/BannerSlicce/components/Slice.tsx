"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Movie } from "@/app/types/movie";
import BannerPoster from "./BannerPoster";
import TrailerModal from "./TrailerModal";

interface BannerSlideProps {
  movie: Movie;
  setIsTrailerOpen: (open: boolean) => void;
  isInitialLoad?: boolean; // Thêm prop để biết có phải lần đầu load không
  currentSlide?: number; // Thêm prop để theo dõi slide hiện tại
  slideIndex?: number; // Thêm prop để biết index của slide này
}

const BannerSlide: React.FC<BannerSlideProps> = ({
  movie,
  setIsTrailerOpen,
  isInitialLoad = false,
  currentSlide = 0,
  slideIndex = 0,
}) => {
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const [posterDone, setPosterDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset animation khi slide thay đổi
    setIsVisible(false);
    setPosterDone(false);

    // Delay để tạo hiệu ứng ẩn trước, sau đó animation xuống
    const hideTimer = setTimeout(() => {
      if (currentSlide === slideIndex) {
        // Chỉ animation nếu đây là slide active
        setIsVisible(true);
      }
    }, 200); // Tăng delay để rõ ràng hơn

    return () => clearTimeout(hideTimer);
  }, [currentSlide, slideIndex]); // Chạy lại khi currentSlide hoặc slideIndex thay đổi

  const handleWatchNow = () => {
    const type = movie.title ? "movie" : "tv";
    navigate(`/details/${type}/${movie.id}`);
  };

  const handleWatchTrailer = () => {
    setShowTrailer(true);
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    setIsTrailerOpen(false);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-210 outline-none transform-gpu">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 "
        style={{
          backgroundImage: movie.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0f0f0f] opacity-130"></div>
      </div>
      <div className="relative h-100 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32 flex justify-center bg-center bg-no-repeat bg-cover">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left flex flex-col justify-center h-full lg:h-auto lg:pl-5 xl:pl-20">
          {/* Title Animation - Step 1 */}
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            {movie.title}
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl lg:max-w-[820px] text-white font-medium mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {movie.overview || "No overview available"}
          </p>

          {/* Buttons Animation - Step 3 */}
          <div
            className={`flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={handleWatchNow}
            >
              Watch Now
            </button>
            <button
              className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={handleWatchTrailer}
            >
              Watch Trailer
            </button>
          </div>
        </div>

        {/* Right Poster Animation */}
        <BannerPoster
          poster_path={movie.poster_path}
          title={movie.title}
          onAnimationComplete={() => setPosterDone(true)}
          isInitialLoad={isInitialLoad && currentSlide === slideIndex}
        />
      </div>

      {showTrailer && (
        <TrailerModal
          movieId={movie.id}
          type={movie.title ? "movie" : "tv"}
          onClose={handleCloseTrailer}
        />
      )}
    </div>
  );
};

export default BannerSlide;
