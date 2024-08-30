import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import accorplogo from '../assets/accorplogo.png';
import NavItem from './NavbarHelpers/NavItems';
import MobileMenu from './NavbarHelpers/MobileMenu';
import ContactButton from "./ContactButton";

function NavBar({ textColor, bordercColor, bgColor }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const handleServicesHover = () => setServicesOpen(true);
    const handleServicesLeave = () => setServicesOpen(false);

    const menuItems = ['About Us', 'Services', 'Contact Us'];

    const servicesDropdownItems = [
        {
            category: 'Risk Assurance',
            services: [
                'SOC (SSAE 18) Attestation',
                'ISO 27001',
                'HIPAA',
                'HITRUST Attestation',
                'GDPR',
                'PCI-DSS',
                'VAPT',
                'CMMI',
                'FEDRAMP',
                'AAF 01/20',
                'SOX'
            ]
        },
        {
            category: 'Cross Border Compliances',
            services: ['Transfer Pricing', 'FEMA']
        },
        {
            category: 'Incorporation',
            services: ['US Incorporation', 'UK Incorporation', 'Dubai Incorporation', 'India Incorporation']
        },
        {
            category: 'CPA Services',
            services: ['Audit/Review/Compilation', 'US Tax', 'ESOP']
        }
    ];

    useEffect(() => {
        const handleScroll = () => setHasShadow(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed -top-4 left-0 w-full z-50 pr-4 bg-opacity-100 h-24 ${bgColor} ${textColor} ${bordercColor} ${hasShadow ? 'shadow-lg' : ''} transition-shadow duration-300 ease-in-out`}
        >
            <div className="container mx-auto px-4 lg:px-16 flex flex-row justify-between items-center">
                <a href="/" className="flex items-center mb-4 lg:mb-0 -ml-4">
                    <img src={accorplogo} alt="Logo" className="pt-4 lg:pt-0 h-28"/>
                </a>

                <nav className="hidden lg:flex">
                    <ul className="flex space-x-4">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === `/${item.toLowerCase().replace(/\s+/g, '')}`;
                            return (
                                <NavItem 
                                    key={index}
                                    item={item}
                                    isActive={isActive}
                                    servicesOpen={servicesOpen}
                                    handleServicesHover={handleServicesHover}
                                    handleServicesLeave={handleServicesLeave}
                                    servicesDropdownItems={servicesDropdownItems}
                                />
                            );
                        })}
                    </ul>
                    <ContactButton/>
                </nav>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-6 w-6" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            <MobileMenu
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
                servicesDropdownItems={servicesDropdownItems}
                closeMenu={closeMenu}
            />
        </header>
    );
}

export default NavBar;
