import React from 'react';

import '../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TransitionButton from '../components/TransitionButton';
import WhyChooseUs from '../ScreenComponents/WhyChooseUs';
import Services from '../ScreenComponents/Services';
import FeedbackSection from '../ScreenComponents/FeedbackSection';
import BlogSection from '../ScreenComponents/BlogSection';
import IndustrySpecialisation from '../ScreenComponents/IndustrySpecialization';

function HomePage() {

    return (
        <div className="relative bg-white max-w-full">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-2xl tracking-tight font-semibold text-gray-900 sm:text-xl md:text-6xl text-left lg:text-center">
                        Global Expertise, Local Focus
                        <br />
                        Your trusted <span className="text-blue-600 italic">CPA Partner</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center">
                        Comprehensive financial services for businesses and individuals <br /> with over <span className="text-blue-600">35 years of global experience.</span>
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <section className="flex flex-wrap justify-center sm:justify-around py-10 px-8 sm:px-12 md:px-24 h-auto">
                <TransitionButton 
                    heading="SOC"
                    text="Tax planning, preparation, and filing for individuals and businesses."
                    />
                <TransitionButton 
                    heading="USA INCORPORATION"
                    text="Tax planning, preparation, and filing for individuals and businesses."
                    />
                <TransitionButton 
                    heading="COMPLIANCES"
                    text="Tax planning, preparation, and filing for individuals and businesses."
                    />
            </section>

            {/* Powering section */}
            <section className="relative text-center py-10 px-4 sm:px-16">
                <p className="justify-center pb-8">POWERING THE WORLD'S BEST COMPANIES</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-2xl font-bold text-gray-600">
                    <p>WEBFLOW</p>
                    <p>ROBINHOOD</p>
                    <p>LOOM</p>
                    <p>UDACITY</p>
                    <p>DISCORD</p>
                    <p>ARTICLE.</p>
                    <p>INTERCOM</p>
                    <p>GUSTO</p>
                </div>
            </section>

            <WhyChooseUs/>
            <Services/>
            
            <IndustrySpecialisation/>
            <FeedbackSection/>
            <BlogSection/>

            {/* Subscribe Section */}
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
