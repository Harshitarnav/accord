import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import accorplogo from '../../assets/accorplogo.png';

const MobileMenu = ({ menuOpen, toggleMenu, servicesDropdownItems, closeMenu }) => {
    const location = useLocation();
    const [openMainMenu, setOpenMainMenu] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

    const handleMainMenuToggle = () => {
        setOpenMainMenu(!openMainMenu);
    };

    const handleSubMenuToggle = (index) => {
        if (openSubMenuIndex === index) {
            setOpenSubMenuIndex(null);
        } else {
            setOpenSubMenuIndex(index);
        }
    };

    return (
        <nav
            className={`lg:hidden fixed top-0 left-0 bg-white w-64 h-full overflow-y-auto z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out rounded-r-2xl border-r-4 border-blue-800`}
        >
            <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={40}
                            d="M368 368L144 144M368 144L144 368"
                        />
                    </svg>
                </button>
            </div>
            <ul className="pb-4 space-y-2">
                <a href="/" className="flex mb-4 text-4xl font-bold text-left text-black mx-4">
                    Accorp
                </a>
                {/* Main Menu Items */}
                <li>
                    <a
                        href="/"
                        onClick={closeMenu}
                        className={`block py-2 px-4 text-black text-left font-bold text-lg transition ${location.pathname === '/' ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white' : ''}`}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <div
                        onClick={handleMainMenuToggle}
                        className={`block py-2 px-4 text-black text-left font-bold text-lg transition ${openMainMenu && location.pathname !== '/' ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white' : ''}`}
                    >
                        Services
                    </div>
                    {openMainMenu && (
                        <ul className="pl-4 space-y-1">
                            {servicesDropdownItems.map((item, index) => (
                                <li key={index}>
                                    <div
                                        onClick={() => handleSubMenuToggle(index)}
                                        className={`block py-2 px-4 text-black text-left font-bold text-[16px] transition ${openSubMenuIndex===index ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white' : ''}`}
                                    >
                                        {item.category}
                                    </div>
                                    {openSubMenuIndex === index && (
                                        <ul className="pl-4 space-y-1">
                                            {item.services.map((service, subIndex) => {
                                                const path = `/${service.toLowerCase().replace(/\s+/g, '')}`;
                                                const isActive = location.pathname === path;
                                                return (
                                                    <li key={subIndex}>
                                                        <a
                                                            onClick={closeMenu}
                                                            href={path}
                                                            className={`block py-2 px-4 text-black text-left font-bold text-sm transition ${isActive ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white' : ''}`}
                                                        >
                                                            {service}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li>
                    <a
                        href="/blogs"
                        onClick={closeMenu}
                        className={`block py-2 px-4 text-black text-left font-bold text-lg transition ${location.pathname === '/blogs' ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white' : ''}`}
                    >
                        Blogs
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileMenu;
