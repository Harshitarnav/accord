import React from "react";

const NavItem = ({ item, isActive, servicesOpen, handleServicesHover, handleServicesLeave, servicesDropdownItems }) => {
    const isServices = item === 'Services';

    return (
        <li
            onMouseEnter={isServices ? handleServicesHover : null}
            onMouseLeave={isServices ? handleServicesLeave : null}
            className="relative"
        >
            {/* Main Navigation Link */}
            {!isServices ? (
                <a 
                    href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className={`block py-2 px-4 rounded-md font-semibold transition text-black ${isActive
                        ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white'
                        : 'hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:text-white'
                    }`}
                >
                    {item}
                </a>
            ) : (
                <span
                    className={`block py-2 px-4 rounded-md font-semibold transition text-black cursor-pointer ${servicesOpen
                        ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white'
                        : 'hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:text-white'
                    }`}
                >
                    {item}
                </span>
            )}

            {/* Services Dropdown */}
            {isServices && servicesOpen && (
                <div
                    className="absolute -right-20 mt-2 w-[1000px] bg-white shadow-lg rounded-3xl p-6 z-10 transition-all duration-300 ease-in-out"
                    onMouseEnter={handleServicesHover}
                    onMouseLeave={handleServicesLeave}
                >
                    <div className="flex flex-col gap-6">
                        {servicesDropdownItems.map((serviceCategory, idx) => (
                            <div key={idx} className="flex flex-col">
                                <h3 className="text-blue-600 font-bold mb-2 text-left">{serviceCategory.category}</h3>
                                <div className="flex flex-wrap">
                                    {serviceCategory.services.map((service, index) => (
                                        <div key={index} className="flex py-2">
                                            <a
                                                href={`/${service.toLowerCase().replace(/\s+/g, '').replace(/\//g, '')}`}
                                                className="px-4 text-gray-700 bg-gray-100 rounded-full w-fit mx-1 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:text-white border-2 border-blue-1000 transition-all duration-300 ease-in-out"
                                            >
                                                {service}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </li>
    );
};

export default NavItem;
