import { useState } from "react";

export default function Navbar() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experiences" },
    { label: "Skills", href: "#skills" },
    { label: "Research", href: "#research" },
    { label: "Awards & Media", href: "#awards" },
    { label: "Chat", href: "#ask" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-70 text-white fixed top-0 left-0 w-full z-50 backdrop-blur-md px-4 sm:px-8 py-3">
      <div className="flex justify-between items-center">
        <div className="text-lg sm:text-xl font-bold">Mintai Kim</div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Enhanced desktop menu */}
        <ul className="hidden sm:flex space-x-2 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative px-4 py-2 rounded-xl text-white/80 hover:text-white transition-all duration-300 group overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-teal-400/30 transition-all duration-300"></div>
                
                {/* Text content */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Enhanced mobile menu dropdown */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4">
          <ul className="flex flex-col space-y-1 text-sm font-medium">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
