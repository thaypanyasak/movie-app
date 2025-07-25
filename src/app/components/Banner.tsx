interface PageBannerProps {
  title: string;
  type?: "movie" | "tv";
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div className="relative w-full h-[230px] overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(
              to top,
              rgba(15,15,15,0.85) 0%,
              rgba(15,15,15,0.8) 8%,
              rgba(15,15,15,0.7) 16%,
              rgba(15,15,15,0.6) 24%,
              rgba(15,15,15,0.5) 32%,
              rgba(15,15,15,0.4) 40%,
              rgba(15,15,15,0.35) 55%,
              rgba(15,15,15,0.2) 70%,
              rgba(15,15,15,0.08) 85%,
              rgba(15,15,15,0.03) 97%,
              rgba(15,15,15,0) 100%
            )`,
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full ">
        <div className="text-center">
          <h1 className="text-6xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
    </div>
  );
};

export default PageBanner;
