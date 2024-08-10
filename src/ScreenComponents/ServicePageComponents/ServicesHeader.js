import React from 'react';
import aic from '../../assets/aic.png';
import hrt from '../../assets/hrt.png';
import cpa from '../../assets/cpa.jpeg';
import peer_review from '../../assets/peer_review.png';
import pcaob from '../../assets/images.png';
import competitive_costing from '../../assets/competitive_costing.jpeg';
import best from '../../assets/best.webp';

function ServicesHeader() {
    const features = [
        {
            name: "California Registered CPA",
            images: [cpa]
        },
        {
            name: "Peer Review Registered",
            images: [peer_review]
        },
        {
            name: "Cost Competitiveness",
            images: [competitive_costing]
        },
        {
            name: "Best in Industry Report Quality",
            images: [best]
        },
        {
            name: "PCAOB Registered",
            images: [pcaob]
        },
        {
            name: "AICPA Registered",
            images: [aic]
        }
    ];

    return (
        <div className="relative max-w-7xl mx-auto py-12 px-4">
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-left lg:text-center">
                    SOC 1 / SOC 2
                </h1>
                <p className="mt-3 mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left lg:text-center">
                    Elevate Trust with SOC 2 Compliance. Enhance your organization's credibility and security with Accorp Partners' expert guidance in SOC 2 reporting and SOC 1 audit.
                </p>
            </div>

            <div className="flex flex-wrap justify-between text-2xl font-bold text-gray-600 mt-10">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2 text-center flex flex-row">
                        <div className="flex justify-center">
                            {feature.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={feature.name} className="h-14" />
                            ))}
                        </div>
                        <p className="text-center p-4 mb-4 text-sm">{feature.name}</p>
                    </div>
                ))}
            </div>

            {/* Buttons in a Row */}
            <div className="flex flex-col lg:flex-row gap-x-12 justify-center md:justify-between mt-16 px-4 lg:px-32">
                <button className="w-full bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 mb-4 md:mb-0">
                    Chat Now with Us
                </button>
                <button className="w-full bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 mb-4 md:mb-0">
                    Sample Policies Download
                </button>
                <button className="w-full bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                    Book an Expert Appointment
                </button>
            </div>
        </div>
    );
}

export default ServicesHeader;
