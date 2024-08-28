import React from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import PhasewiseSection from '../ScreenComponents/ServicePageComponents/PhasesSection';
import FeedbackSection from '../ScreenComponents/FeedbackSection';
import BlogSection from '../ScreenComponents/BlogSection';
import FAQSection from '../ScreenComponents/ServicePageComponents/FAQSection';
import TypeOfSoc from '../ScreenComponents/ServicePageComponents/TypeOfSoc';
import ServicesHeader from '../ScreenComponents/ServicePageComponents/ServicesHeader';
import ISOCertificationJourneyMenu from '../ScreenComponents/ServicePageComponents/processes'
import ServicePageImages from '../ScreenComponents/ServicePageComponents/OurClients';
import bg from '../assets/ServicePage/iso6.png'

function ServicesPage() {

    return (
        <div className="relative bg-white max-w-full">
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
                    <ServicesHeader/>
                </div>
            </div>
            <ISOCertificationJourneyMenu/>
            
            <TypeOfSoc/>

            <ServicePageImages/>
            <FeedbackSection/>
            <BlogSection/>
            <FAQSection/>
        </div> 
    );
}

export default ServicesPage;
