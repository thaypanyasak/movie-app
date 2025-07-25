import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../Constants/navItems";
import { useNavActive } from "../hooks/useNavActive";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { isActive } = useNavActive();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="lg:hidden fixed top-0 left-0 h-full w-64 sm:w-72 md:w-80 bg-gradient-to-b from-gray-900 to-black text-white z-50 shadow-2xl">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg"
            />
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              TheMovies
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-200 p-2 rounded-lg text-xl font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-3">
          {NAV_ITEMS.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                onClick={onClose}
                className={`block px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.to)
                    ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/30 font-bold"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50 hover:translate-x-2"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">
                    {item.to === "/" && "🏠"}
                    {item.to === "/movies" && "🎬"}
                    {item.to === "/tv-series" && "📺"}
                  </span>
                  {item.label}
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-gray-700">
          <div className="text-center space-y-3">
            <p className="text-gray-400 text-sm">Welcome to TheMovies!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
