import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function NavBar({ textColor, bordercColor, bgColor }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const menuItems = ['About Us', 'Services', 'Blog', 'Contact Us'];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 ${bgColor} ${textColor} ${bordercColor}`}>
            {/* Top bar containing logo and menu items */}
            <div className="container mx-auto px-4 lg:px-16 py-4 flex flex-row justify-between items-center">
                {/* Logo Section */}
                <a href="/" className="flex items-center mb-4 lg:mb-0">
                    <p className="text-black text-4xl font-bold">Accorp</p>
                </a>

                {/* Menu Items */}
                <nav className="hidden lg:flex">
                    <ul className="flex space-x-4">
                        {menuItems.map((item, index) => {
                            const path = `/${item.toLowerCase().replace(/\s+/g, '')}`;
                            const isActive = location.pathname === path;

                            return (
                                <li key={index}>
                                    <a href={path}
                                       className={`block py-2 px-4 rounded-md text-black font-semibold transition ${
                                           isActive ? 'bg-gray-800 text-white' : 'hover:text-white hover:bg-gray-800'
                                       }`}>
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Hamburger Icon for mobile screens */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-6 w-6" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Sidebar Menu for mobile screens */}
            <nav
                className={`lg:hidden fixed top-0 left-0 bg-gray-800 w-64 h-full overflow-y-auto z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M368 368L144 144M368 144L144 368"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="py-4 space-y-2">
                    {menuItems.map((item, index) => {
                        const path = `/${item.toLowerCase().replace(/\s+/g, '')}`;
                        const isActive = location.pathname === path;

                        return (
                            <li key={index}>
                                <a onClick={closeMenu} href={path}
                                   className={`block py-2 px-4 text-white text-center transition ${
                                       isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                                   }`}>
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        </header>
    );
}

export default NavBar;
