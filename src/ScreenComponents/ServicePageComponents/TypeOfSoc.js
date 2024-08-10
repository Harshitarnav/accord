import React from 'react';
import csae from '../../assets/csae.png';
import soc_1 from '../../assets/soc_1.png';
import soc_2 from '../../assets/soc_2.png';
import soc_3 from '../../assets/soc_3.png';
import soc_cyber from '../../assets/soc_cyber.png';

function TypeOfSoc() {
    const options = [
        {
            image: soc_1,
            title: "SOC 1",
            description: "Strengthening Control Frameworks to Meet Regulatory Requirements with our SOC services."
        },
        {
            image: soc_2,
            title: "SOC 2",
            description: "Encompassing Controls for Addressing Information Systems across Five Trust Service Criteria – Security, Availability, Confidentiality, Privacy, and Processing Integrity in SOC 1 audit."
        },
        {
            image: soc_3,
            title: "ISAE 3000/ ISAE 3402",
            description: "This is the international assurance standard that SOC audit services adhere to."
        },
        {
            image: csae,
            title: "SOC 3",
            description: "Comprehensive Security Validation Demonstrated in a Public Report for Enhanced Stakeholder and Client Trust in SOC 1 audit."
        },
        {
            image: soc_cyber,
            title: "CSAE 3000/CSAE 3416",
            description: "These are globally recognized standards that assess and assure the effectiveness of service organizations' controls and processes, enhancing trust and transparency in their operations with our SOC 1 Audit and SOC services."
        },
        {
            image: soc_1,
            title: "SOC for Cybersecurity",
            description: "Protect your digital assets with Accorp's SOC for Cybersecurity services. Strengthen defenses, detect threats, and secure your information against evolving risks."
        }
    ];

    return (
        <div className="py-12 px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-left mx-4 lg:mx-48">TYPE OF SOC ASSESSMENT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 justify-items-center lg:px-36">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-start w-full max-w-xs text-left bg-gray-100 rounded-2xl p-6 shadow-md">
                        <img src={option.image} alt={option.title} className="text-blue-500 text-3xl mb-4"/>
                        <h3 className="text-xl font-semibold">{option.title}</h3>
                        <p className="mt-2 text-gray-600">{option.description}</p>
                    </div>
                ))}
            </div>

            <section className="flex flex-wrap justify-around py-10 bg-gray-200">
                <div className="text-center mb-4">
                    <h3 className="text-4xl font-bold text-blue-600">700+</h3>
                    <p className="text-gray-600">Trusted Clients</p>
                </div>
                <div className="text-center mb-4">
                    <h3 className="text-4xl font-bold text-blue-600">7+</h3>
                    <p className="text-gray-600">Awards</p>
                </div>
                <div className="text-center mb-4">
                    <h3 className="text-4xl font-bold text-blue-600">34+</h3>
                    <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-blue-600">115+</h3>
                    <p className="text-gray-600">Experts</p>
                </div>
            </section>
        </div>
    );
}

export default TypeOfSoc;
