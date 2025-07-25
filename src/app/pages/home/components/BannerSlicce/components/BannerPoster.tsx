"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BannerPosterProps {
  poster_path: string;
  title: string;
  onAnimationComplete: () => void;
  animatePoster?: boolean;
  className?: string;
  isInitialLoad?: boolean; // Thêm prop để biết có phải lần đầu load không
}

const BannerPoster: React.FC<BannerPosterProps> = ({
  poster_path,
  title,
  onAnimationComplete,
  isInitialLoad = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInitialLoad) {
      // Chỉ animation nếu là lần đầu load
      setIsLoaded(false);
      const timer = setTimeout(() => {
        setIsLoaded(true);
        onAnimationComplete();
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // Không animation, hiển thị ngay lập tức
      setIsLoaded(true);
      onAnimationComplete();
    }
  }, [poster_path, onAnimationComplete, isInitialLoad]);

  return (
    <div className="w-full lg:w-1/3 mt-4 sm:mt-6 lg:mt-0 justify-center mr-0 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10 hidden lg:block transform-gpu ml-40">
      <div className="relative">
        {poster_path ? (
          <Image
            className={`rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg w-32 h-48 sm:w-40 sm:h-60 md:w-48 md:h-72 lg:w-56 lg:h-84 xl:w-72 xl:h-108 2xl:w-93 2xl:h-150 object-cover ${
              isInitialLoad
                ? `transform transition-all duration-1200 ease-out ${
                    isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`
                : "opacity-100"
            }`}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={372}
            height={600}
            priority
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <div
            className={`w-32 h-48 sm:w-40 sm:h-60 md:w-48 md:h-72 lg:w-56 lg:h-84 xl:w-72 xl:h-108 2xl:w-100 2xl:h-200 bg-gray-600 rounded-2xl sm:rounded-3xl lg:rounded-5xl flex items-center justify-center ${
              isInitialLoad
                ? `transform transition-all duration-1200 ease-out ${
                    isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`
                : "opacity-100"
            }`}
          >
            <span className="text-gray-300 text-xs sm:text-sm">No Image</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerPoster;
