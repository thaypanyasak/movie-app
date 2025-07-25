interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className="text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-all duration-200 active:scale-95"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <div
          className={`w-full h-0.5 bg-white mb-1 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`w-full h-0.5 bg-white mb-1 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-full h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
