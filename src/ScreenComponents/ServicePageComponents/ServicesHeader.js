import React from 'react';

function ServicesHeader({bg, heading, headline, features}) {
    return (
        <div 
            className="relative"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',  // Ensures the background image covers the entire container
                backgroundPosition: 'center',  // Centers the image in the container
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
            }}
        >
            {/* Overlay with opacity */}
            <div 
                className="absolute inset-0 bg-blue-600"
                style={{
                    opacity: 0.3,  // Adjust the opacity value as needed
                }}
            />
            
            {/* ServicesHeader should be placed above the overlay */}
            <div className="relative z-10">
                <div className="relative max-w-7xl mx-auto py-24 lg:py-48 px-4" >
                    <div className="text-center pt-16">
                        <h1 className="text-3xl lg:text-5xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-left lg:text-center text-white">
                            {heading}
                        </h1>

                        <p className=" mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center pt-5">
                            
                            <span className='bg-gradient-to-l from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-bold text-lg lg:text-2xl'>
                                {headline}
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-wrap text-2xl font-bold text-blue-400 mt-10 lg:justify-center">
                        {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`w-fit py-2 text-center flex flex-row items-center bg-white px-2 lg:px-4 rounded-2xl my-2 lg:mx-4`}
                        >
                            <div className="flex items-center">
                                <div className="w-3 lg:w-5 h-3 lg:h-5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mr-2 border-2 lg:border-4 border-blue-100"></div>
                                <p className="text-left text-[16px]">{feature.name}</p>
                            </div>
                        </div>
                        
                        ))}
                    </div>


                    {/* Buttons in a Row */}
                    {/* <div className="flex flex-col lg:flex-row gap-x-12 justify-center md:justify-between mt-16 px-4 lg:px-32">
                        <button className="w-full bg-[#0F52BA] text-white px-6 py-3 rounded-md hover:bg-blue-700 mb-4 md:mb-0">
                            Chat Now with Us
                        </button>
                        <button className="w-full bg-[#0F52BA] text-white px-6 py-3 rounded-md hover:bg-blue-700 mb-4 md:mb-0">
                            Sample Policies Download
                        </button>
                        <button className="w-full bg-[#0F52BA] text-white px-6 py-3 rounded-md hover:bg-blue-700">
                            Book an Expert Appointment
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ServicesHeader;
