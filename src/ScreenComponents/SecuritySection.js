import React from 'react';
import { FaAward, FaGlobe, FaCogs, FaLightbulb } from 'react-icons/fa'; // Assuming you're using react-icons for icons


function SecuritySection() {
    const options = [
        {
            icon: <FaAward className="text-blue-500 text-3xl" />,
            title: "Decades of Expertise",
            description: "With over 35 years of expertise, we bring a wealth of global knowledge to every client engagement."
        },
        {
            icon: <FaGlobe className="text-red-500 text-3xl" />,
            title: "Global Compliance",
            description: "We ensure strict adherence to all global standards, keeping your business compliant and secure."
        },
        {
            icon: <FaCogs className="text-purple-500 text-3xl" />,
            title: "Tailored Solutions",
            description: "Comprehensive services for both individuals and businesses, customized to your unique needs."
        }
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column: Text Content */}
                    <div className="mb-8 lg:mb-0 text-left px-16">
                        <h2 className="text-3xl font-bold mb-4">Committed to security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Curabitur morbi dolor habitasse aliquet nunc.
                            Amet eu vel aliquet nunc tristique. Aliquam eu sit pellentesque odio ut ut eu quis. Vel.
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:w-1/2">
                        <img
                            src="your-image-path.png" 
                            alt="Security Illustration"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Feature Boxes */}
                <div className="flex justify-between p-16">
                    {options.map((option, index) => (
                        <div key={index} className="flex flex-col items-start max-w-xs text-left">
                            {option.icon}
                            <h3 className="text-xl font-semibold mt-4">{option.title}</h3>
                            <p className="mt-2 text-gray-600">{option.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SecuritySection;
