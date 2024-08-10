import React from 'react';
import {ReactComponent as ArrowIcon} from '../assets/arrow-right-circle.svg';

const TransitionButton = ({ heading, text }) => {
    return (
        <div className="relative flex flex-col w-[500px] h-36 bg-white shadow-lg rounded-2xl p-6 hover:bg-gray-100 transition-all duration-1000 group hover:h-48">
            <div className="relative">
                <h3 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold transition-all duration-1000 ease-in-out group-hover:-translate-x-56 group-hover:text-lg">
                    {heading}
                </h3>
            </div>
            <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-xl font-medium text-left transition-opacity duration-1000 p-6">
                {text}
            </p>
            <span className="flex flex-row absolute bottom-4 -right-20 transform transition-transform duration-1000 ease-in-out group-hover:translate-y-2 group-hover:-translate-x-[435px]">
                <ArrowIcon className="w-6 h-6 text-gray-700" />
                <p className="ml-2 opacity-0 group-hover:opacity-100 text-xl font-medium text-left transition-opacity duration-1000">
                    View More
                </p>
            </span>
        </div>
    );
};

export default TransitionButton;
