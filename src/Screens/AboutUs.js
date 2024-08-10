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

function HomePage() {

    return (
        <div className="relative bg-white max-w-full">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl text-left lg:text-center">
                        <span className="text-gray-500 text-xl pt-2">About us</span>
                        <br />
                        We are <span className="text-blue-600">Accorp.</span>
                        <br />
                        Your trusted CPA Partner
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center">
                        Comprehensive financial services for businesses and individuals with over <span className="text-blue-600">35 years of global experience.</span>
                    </p>
                </div>
            </div>

            <WhyChooseUs/>
            <SecuritySection/>
            <LeadershipSection/>
            <LeadershipSection/>
            <LocationSection/>

            {/* Statistics Section */}
            <section className="flex flex-col sm:flex-row justify-around items-center py-10 px-8 sm:px-16 md:px-48 bg-gray-200 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-4 sm:mb-0">SUBSCRIBE TO STAY INFORMED</h2>
                <div className="flex w-full sm:w-auto justify-center rounded-full border-2 border-black">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-auto px-4 py-2 rounded-l-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-full focus:outline-none focus:ring-2">
                        Subscribe
                    </button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
