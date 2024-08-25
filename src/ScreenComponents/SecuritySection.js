import React from 'react';
import { FaAward, FaGlobe, FaCogs, FaLightbulb } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import security from '../assets/HomePage/Security.png';


function SecuritySection() {
    const options = [
        {
            icon: <FaAward className="text-[#fc9d32] bg-gray-300 p-2 rounded-2xl text-5xl" />,
            title: "Encryption",
            description: "With over 35 years of expertise, we bring a wealth of global knowledge to every client engagement."
        },
        {
            icon: <FaGlobe className="text-[#ff73f9] bg-gray-300 p-2 rounded-2xl text-5xl" />,
            title: "Privacy",
            description: "We ensure strict adherence to all global standards, keeping your business compliant and secure."
        },
        {
            icon: <FaCogs className="text-blue-400 bg-gray-300 p-2 rounded-2xl text-5xl" />,
            title: "Data Storage",
            description: "Comprehensive services for both individuals and businesses, customized to your unique needs."
        }
    ];

    return (
        <section className="bg-white py-12 pb-32 lg:px-52">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* Left Column: Text Content */}
                <div className="text-left lg:w-1/2">
                    <h2 className="text-xl lg:text-3xl font-bold mb-4">Committed to security</h2>
                    <p className="text-gray-600 leading-relaxed lg:pr-32">
                        Lorem ipsum dolor sit amet consectetur. Curabitur morbi dolor habitasse aliquet nunc.
                        Amet eu vel aliquet nunc tristique. Aliquam eu sit pellentesque odio ut ut eu quis. Vel.
                    </p>
                </div>

                {/* Right Column: Image */}
                <div className="">
                    <img
                        src={security}
                        alt="Security Illustration"
                        className="lg:flex hidden w-[500px]"
                    />
                </div>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 justify-items-center lg:justify-center lg:py-8 px-4">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-start max-w-xs text-left">
                        {option.icon}
                        <h3 className="text-xl font-semibold mt-4">{option.title}</h3>
                        <p className="mt-2 text-gray-600">{option.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SecuritySection;
