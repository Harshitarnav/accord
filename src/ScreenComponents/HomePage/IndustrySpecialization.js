import React, { useState } from 'react';

const industryData = [
    {
        name: 'Cloud Computing & Data Centers Industry',
        services: ['SOC 2 Examination', 'FedRAMP', 'ISO 27001', 'VAPT', 'CSA STAR Programs', 'Cloud Configuration Assessments'],
        color: '#2a4365'
    },
    {
        name: 'Payment Card Industry',
        services: ['PCI DSS', 'P2PE', 'PIN Security'],
        color: '#3B2D2D'
    },
    {
        name: 'Financial Services & Fintech Industry',
        services: ['SOX Compliance', 'AML', 'KYC'],
        color: '#4B5A5D'
    },
    {
        name: 'Payroll',
        services: ['Payroll Processing', 'Payroll Tax Filing'],
        color: '#7B4C2F'
    },
    {
        name: 'US Government',
        services: ['FISMA Compliance', 'NIST'],
        color: '#5A5C64'
    },
    {
        name: 'Healthcare Industry',
        services: ['HIPAA Compliance', 'HITRUST Certification'],
        color: '#1C2C45'
    }
];

const IndustrySpecialisation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="py-12 px-6 bg-white">
            <h2 className="text-xl font-bold mb-8 lg:text-center text-left">Our Industry Specialisation</h2>
            <div className="flex justify-center items-center">
                {industryData.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            backgroundColor: tab.color,
                            width: activeIndex === index ? '800px' : '60px',
                            transition: 'width 0.3s ease'
                        }}
                        className={`h-[450px] flex flex-col justify-center items-center rounded-xl mx-2 cursor-pointer ${activeIndex !== null && activeIndex !== index ? 'hidden sm:flex' : 'flex'}`}
                    >
                        <p
                            className="text-white"
                            style={{
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                                transition: 'opacity 0.3s ease',
                                opacity: activeIndex === index ? 0 : 1
                            }}
                        >
                            {tab.name}
                        </p>
                        {activeIndex === index && (
                            <div className="flex flex-col w-full h-full px-4">
                                <div className="flex flex-row justify-end items-start h-full">
                                    <ul className="flex flex-col justify-center list-disc list-inside bg-white text-black text-left p-4 rounded-2xl lg:w-1/2 h-full">
                                        {tab.services.map((service, i) => (
                                            <li key={i}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h3 className="text-white text-[14px] lg:text-lg font-bold mt-4 mb-2 text-center self-center">{tab.name}</h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustrySpecialisation;
