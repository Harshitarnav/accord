import React, {useEffect, useState} from 'react';

import '../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TransitionButton from '../components/TransitionButton';
import WhyChooseUs from '../ScreenComponents/WhyChooseUs';
import Services from '../ScreenComponents/Services';
import FeedbackSection from '../ScreenComponents/FeedbackSection';
import BlogSection from '../ScreenComponents/BlogSection';
import IndustrySpecialisation from '../ScreenComponents/IndustrySpecialization';
import SecuritySection from '../ScreenComponents/SecuritySection';
import LeadershipSection from '../ScreenComponents/LeadershipSection';
import LocationSection from '../ScreenComponents/LocationSection';
import Subscribe from '../ScreenComponents/Subscribe';

function HomePage() {

    return (
        <div className="relative bg-white max-w-full">
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
            <SecuritySection/>
            <LeadershipSection/>
            <LeadershipSection/>
            <LocationSection/>
            <Subscribe/>
        </div>
    );
}

export default HomePage;
