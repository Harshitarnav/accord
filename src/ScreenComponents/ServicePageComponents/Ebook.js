import React from 'react';
// import ebookImage from '../assets/ebookImage.png'; // Replace with your actual image path

const EbookSection = ({data}) => {
    
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-8 px-4 lg:px-48 rounded-lg">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 py-4">
                <img 
                    src={data.image} 
                    alt="Ebook Cover" 
                    className="rounded-lg shadow-md w-full"
                />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 py-4 px-2 lg:px-8 lg:pl-16 flex flex-col items-start">
                <h1 className="text-xl lg:text-3xl font-bold text-black mb-4">
                    {data.title}
                </h1>
                <p className="text-gray-700 text-sm lg:text-lg mb-6 text-left">
                    {data.description}
                </p>
                <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                    Download E-book
                </button>
            </div>
        </div>
    );
};

export default EbookSection;
