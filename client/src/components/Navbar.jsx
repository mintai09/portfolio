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

        {/* 데스크탑 메뉴 */}
        <ul className="hidden sm:flex space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-teal-400 transition border-b-2 border-transparent hover:border-teal-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col mt-4 space-y-2 text-sm font-medium items-start">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-2 py-1 hover:text-teal-400 transition border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
