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
import BottomBar from '../components/BottomBar';
import { useParams } from "react-router-dom";
import { servicePageData } from '../assets/ServicePage/servicePageData';
import EbookSection from '../ScreenComponents/ServicePageComponents/Ebook';

function ServicesPage() {
    const { serviceId } = useParams();
    const serviceData = servicePageData[`${serviceId.toLowerCase()}`];
    console.log("SERVICE DATA", serviceData)

    return (
        <div className="relative bg-white max-w-full">
            <ServicesHeader bg={serviceData.bg} heading={serviceData.heading} headline={serviceData.headline} features={serviceData.features}/>
            <ISOCertificationJourneyMenu heading={serviceData.heading} menuItems={serviceData.menuItems}/>
            {serviceData.ebook && <EbookSection data={serviceData.ebook}/>}
            {serviceData.options && <TypeOfSoc options={serviceData.options}/>}
            <ServicePageImages images={serviceData.images}/>
            <FeedbackSection/>
            <BlogSection/>
            <FAQSection/>
            <BottomBar/>
        </div> 
    );
}

export default ServicesPage;
