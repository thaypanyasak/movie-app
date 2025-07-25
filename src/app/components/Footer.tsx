import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-black text-white py-16 h-[57vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('./img/footer-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
            <h1 className="text-3xl font-bold text-white">Thay Movie</h1>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-30 text-center text-2xl font-bold max-w-4xl">
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Term of services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  About us
                </a>
              </li>
            </ul>

            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Live
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Premium
                </a>
              </li>
            </ul>

            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  You must watch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Recent release
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Top IMDB
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-800 transition-colors"
                >
                  Pravacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
