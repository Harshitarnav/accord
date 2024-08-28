import React from 'react';
import aic from '../../assets/aic.png';
import hrt from '../../assets/hrt.png';
import cpa from '../../assets/cpa.jpeg';
import peer_review from '../../assets/peer_review.png';
import pcaob from '../../assets/images.png';
import competitive_costing from '../../assets/competitive_costing.jpeg';
import best from '../../assets/best.webp';
import bg from '../../assets/ServicePage/ISO/iso27001logo.png'

function ServicesHeader() {
    const features = [
        {
            name: "ISO Certified Body with IAF Accreditation",
            images: [bg]  // Replace `iso_iaf` with the actual image import or path
        },
        {
            name: "300 Clients Across 19 Countries",
            images: [peer_review]  // Replace `clients` with the actual image import or path
        },
        {
            name: "California Registered CB",
            images: [cpa]  // Replace `california_cb` with the actual image import or path
        },
        {
            name: "Cost Competitiveness",
            images: [competitive_costing]  // If already existing, you can reuse this
        },
        {
            name: "Audit and Certification Support",
            images: [hrt]  // Replace `audit_support` with the actual image import or path
        }
    ];

    return (
        <div className="relative max-w-7xl mx-auto py-48 px-4" >
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-left lg:text-center text-white">
                    ISO 27001 Audit
                </h1>

                <p className=" lg:mt-8 mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center">
                    
                    <span className=' bg-gradient-to-l from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent'>
                        The Definitive Global Benchmark for Ensuring Information Security and Building Trust.
                    </span>
                </p>
            </div>

            <div className="flex flex-wrap text-2xl font-bold text-white mt-10 justify-center">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className={`w-full sm:w-1/2 lg:w-1/3 py-2 text-center flex flex-row ${index > 2 ? 'lg:justify-center' : ''}`}
                    >
                        <div className="flex justify-center">
                            {feature.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={feature.name} className="h-14 bg-white rounded-3xl" />
                            ))}
                        </div>
                        <p className="text-center p-4 mb-4 text-sm">{feature.name}</p>
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
    );
}

export default ServicesHeader;
