import React from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import PhasewiseSection from '../ScreenComponents/ServicePageComponents/PhasesSection';
import FeedbackSection from '../ScreenComponents/FeedbackSection';
import BlogSection from '../ScreenComponents/BlogSection';
import FAQSection from '../ScreenComponents/ServicePageComponents/FAQSection';
import TypeOfSoc from '../ScreenComponents/ServicePageComponents/TypeOfSoc';
import ServicesHeader from '../ScreenComponents/ServicePageComponents/ServicesHeader';

function ServicesPage() {

    return (
        <div className="relative bg-white max-w-full">
            <ServicesHeader/>
            <PhasewiseSection/>
            <TypeOfSoc/>

            <FeedbackSection/>
            <BlogSection/>
            <FAQSection/>
        </div> 
    );
}

export default ServicesPage;
