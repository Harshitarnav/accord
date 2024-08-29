import React, {useEffect, useState} from 'react';

import '../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import WhyChooseUs from '../ScreenComponents/HomePage/WhyChooseUs';
import SecuritySection from '../ScreenComponents/AboutPage/SecuritySection';
import LeadershipSection from '../ScreenComponents/AboutPage/LeadershipSection';
import LocationSection from '../ScreenComponents/AboutPage/LocationSection';
import Subscribe from '../ScreenComponents/Subscribe';
import bg from '../assets/AboutPage/bg.png';
import BottomBar from '../components/BottomBar';

function HomePage() {

    return (
        <div className="relative bg-white max-w-full pt-12">

            <div 
                className="relative"
                // style={{
                //     backgroundImage: `url(${bg})`,
                //     backgroundSize: 'cover',  // Ensures the background image covers the entire container
                //     backgroundPosition: 'center',  // Centers the image in the container
                //     backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                //     // height: '180vh',  // Set the container height to 100% of the viewport height, adjust as needed
                // }}
            >
                {/* Overlay with opacity */}
                {/* <div 
                    className="absolute inset-0 bg-white"
                    style={{
                        opacity: 0.9,  // Adjust the opacity value as needed
                    }}
                /> */}
                
                {/* ServicesHeader should be placed above the overlay */}
                <div className="relative z-10">
                    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl text-left lg:text-center">
                                <span className="text-gray-500 text-xl pt-2">About us</span>
                                <br />
                                We are <span className="text-[#0F52BA]">Accorp.</span>
                                <br />
                                Your trusted CPA Partner
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center">
                                Comprehensive financial services for businesses and individuals with over <span className="text-[#0F52BA]">35 years of global experience.</span>
                            </p>
                        </div>
                    </div>
                    <WhyChooseUs/>
                </div>
            </div>
            
            <SecuritySection/>
            <LeadershipSection/>
            <LeadershipSection/>
            <LocationSection/>
            <Subscribe/>
            <BottomBar/>
        </div>
    );
}

export default HomePage;
