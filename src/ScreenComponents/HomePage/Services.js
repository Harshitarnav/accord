import React from 'react';
import { FaShieldAlt, FaExchangeAlt, FaBuilding, FaCalculator } from 'react-icons/fa'; // Using react-icons for example
import { HiArrowRight } from 'react-icons/hi'; // Assuming you want to use a right arrow icon
import risk from '../../assets/HomePage/Risk.png';
import cross_border from '../../assets/HomePage/Cross_Border.png';
import incorporation from '../../assets/HomePage/Incorporation.png';
import cpa from '../../assets/HomePage/CPA.png';

const Services = () => {
    const services = [
        {
            icon: risk,
            title: "Risk Assurance",
            description: "Providing comprehensive risk assessment and management."
        },
        {
            icon: cross_border,
            title: "Cross Border Compliances",
            description: "Ensuring adherence to international compliance standards."
        },
        {
            icon: incorporation,
            title: "Incorporation",
            description: "Helping you set up and manage your business entities."
        },
        {
            icon: cpa,
            title: "CPA Services",
            description: "Providing certified professional accounting services."
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row py-12 px-4 sm:px-8 lg:px-48 lg:h-[700px]">
            <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col justify-between w-full h-[300px] bg-gray-100 rounded-lg shadow-md p-6 relative">
                    <div className="flex justify-end items-end h-full">
                        <img src={service.icon} className="w-56 object-contain" alt={service.title} />
                    </div>
                    <div className="flex items-end w-full">
                        <h3 className="text-sm sm:text-xl font-semibold text-right">{service.title}</h3>
                        {/* <HiArrowRight className="ml-2 text-xl sm:text-sm" /> */}
                    </div>
                </div>
                ))}
            </div>
            
            <div className="mt-8 lg:mt-0 lg:ml-16 w-full lg:w-5/12 px-1 lg:py-48">
                <h2 className="text-2xl sm:text-xl font-bold text-left">Services</h2>
                <p className="mt-4 text-base sm:text-lg font-medium text-gray-500 text-left">
                    jwkedkjwebdiuw kjwbndfkwenbd kjwbdfkwejbf bjfkejwbfniwekb bjiwbfiwejbfniwej 
                    ibjbfikwedfjniwkejd biwuefbiwebfwiek kjwefednb jwndejwe lblwkm, wbuejfbkwejfbw kjbwbf
                </p>
            </div>
        </div>
    );
};

export default Services;
