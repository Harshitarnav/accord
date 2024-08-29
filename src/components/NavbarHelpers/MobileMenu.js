import React from "react";
import { useLocation } from "react-router-dom";

const MobileMenu = ({ menuOpen, toggleMenu, menuItems, closeMenu }) => {
    const location = useLocation();

    return (
        <nav
            className={`lg:hidden fixed top-0 left-0 bg-gray-800 w-64 h-full overflow-y-auto z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
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
                                   isActive
                                       ? 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white'
                                       : 'hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:text-white'
                               }`}>
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default MobileMenu;
