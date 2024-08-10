import React from 'react';
import { FaAward, FaGlobe, FaCogs, FaLightbulb } from 'react-icons/fa'; // Assuming you're using react-icons for icons

const WhyChooseUs = () => {
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
        },
        {
            icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
            title: "International Insight",
            description: "Navigating cross-border regulations with a global perspective for your success."
        }
    ];

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-left mx-4 sm:mx-8 lg:mx-48">Why choose us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 justify-items-center lg:px-48">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-start max-w-xs text-left">
                        {option.icon}
                        <h3 className="text-xl font-semibold mt-4">{option.title}</h3>
                        <p className="mt-2 text-gray-600">{option.description}</p>
                    </div>
                ))}
            </div>

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-10 px-8 sm:px-16 lg:px-48 bg-gray-200 text-center">
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">700+</h3>
                    <p className="text-gray-600">Trusted Clients</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">7+</h3>
                    <p className="text-gray-600">Awards</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">34+</h3>
                    <p className="text-gray-600">Years of Experience</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">115+</h3>
                    <p className="text-gray-600">Experts</p>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;
