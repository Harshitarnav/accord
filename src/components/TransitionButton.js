import React from 'react';
import { ReactComponent as ArrowIcon } from '../assets/arrow-right-circle.svg';

const TransitionButton = ({ topLogo, heading, text, logos, align }) => {
    return (
        <div className="relative flex flex-col w-full h-36 bg-white shadow-lg rounded-2xl p-6 hover:bg-gray-100 transition-all duration-1000 group hover:h-64">
            <div className="relative">
                <div className={`flex flex-col lg:flex-row items-start justify-center lg:justify-${align} space-y-4 lg:space-y-0 lg:space-x-4`}>
                    {logos && 
                        <div className="flex flex-row items-center space-x-2 lg:space-x-4 transition-opacity duration-500 group-hover:opacity-0">
                            {logos.map((logo, index) => (
                                <img key={index} src={logo} className="w-12 h-12 object-contain" alt={`Logo ${index}`} />
                            ))}
                        </div>
                    }
                </div>
                
                <h3 className="ml-4 group-hover:ml-0 text-xl md:text-2xl font-bold transition-all duration-500 ease-in-out group-hover:text-lg group-hover:text-left group-hover:duration-500">
                    {heading}
                </h3>

                {/* Description text */}
                <p className="inset-0 hidden group-hover:flex items-center justify-center opacity-0 group-hover:opacity-100 text-xl group-hover:text-lg group-hover:text-left font-medium text-left transition-opacity duration-1000">
                    {text}
                </p>

                {/* Arrow and View More text */}
                <span className="flex items-center bottom-4 transform transition-transform duration-500 ease-in-out group-hover:translate-y-2 group-hover:text-[#0F52BA] group-hover:">
                    <ArrowIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    <p className="ml-2 opacity-0 group-hover:opacity-100 text-base md:text-lg font-medium transition-opacity duration-500">
                        View More
                    </p>
                </span>
            </div>

            

            
        </div>
    );
};

export default TransitionButton;
