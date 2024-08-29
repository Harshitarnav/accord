import React from 'react';

import '../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TransitionButton from '../components/TransitionButton';
import WhyChooseUs from '../ScreenComponents/HomePage/WhyChooseUs';
import Services from '../ScreenComponents/HomePage/Services';
import FeedbackSection from '../ScreenComponents/FeedbackSection';
import BlogSection from '../ScreenComponents/BlogSection';
import IndustrySpecialisation from '../ScreenComponents/HomePage/IndustrySpecialization';
import soc from '../assets/soc.png';
import hrt from '../assets/hrt.png';
import hitrusting from '../assets/hitrustimg.png';
import Subscribe from '../ScreenComponents/Subscribe';
import bg from '../assets/bg.png';
import BottomBar from '../components/BottomBar';

function HomePage() {

    return (
        <div className="relative bg-white max-w-full pt-12">
            <div
                style={{backgroundImage:`url(${bg})`,
                backgroundSize: 'cover',  // Ensures the background image covers the entire container
                backgroundPosition: 'center',  // Centers the image in the container
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                 }}
            >
                <div
                    className="relative w-full max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
                >
                    <div className="relative text-center lg:pt-24">
                        <h1 className="text-2xl tracking-tight font-semibold text-black sm:text-xl md:text-6xl text-left lg:text-center">
                            Global Expertise, Local Focus
                            <br />
                            Your trusted <span className="text-[#0F52BA] italic">CPA Partner</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center">
                            Comprehensive financial services for businesses and individuals <br /> with over <span className="text-[#0F52BA]">35 years of global experience.</span>
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 h-auto">
                    <TransitionButton 
                        href="soc(ssae18)attestation"
                        heading="SOC"
                        text="Tax planning, preparation, and filing for individuals and businesses."
                        logos={[soc]}
                        align='start'
                    />
                    <TransitionButton 
                        href="usincorporation"
                        heading="USA INCORPORATION"
                        text="Establish your business in the USA with our comprehensive incorporation services."
                        logos={[soc]}
                        align='start'
                    />
                    <TransitionButton 
                        href="auditreviewcompilation"
                        heading="COMPLIANCES"
                        text="Ensure your business meets all regulatory requirements with our compliance solutions."
                        logos={[hrt, hitrusting, hrt, hitrusting]}
                        align='center'
                    />
                </section>
            </div>



            {/* Powering section */}
            <section className="relative text-center py-10 px-8 sm:px-16">
                <p className="justify-center pb-8">POWERING THE WORLD'S BEST COMPANIES</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-2xl font-bold text-gray-600 lg:mx-10">
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
            <Subscribe/>
            <BottomBar/>
        </div>
    );
}

export default HomePage;
