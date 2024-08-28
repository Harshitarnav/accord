import React from 'react';
import Dropdown from '../../components/Dropdown'; // Ensure to import the updated Dropdown component

const ISOCertificationJourneyMenu = () => {
    const heading = 'ISO 27001 Certification Journey';
    const menuItems = [
        {
            title: '01. Preliminary Assessment',
            content: [
                'Initial help: Understand your firm\'s objectives and existing information security measures.',
                'Certified Framework Alignment: Align your with ISO standards audit.',
                'Scope Definition: Define the scope of your Information Security Management System (ISMS).'
            ]
        },
        {
            title: '02. ISMS Implementation',
            content: [
                'Compliance Integration: Tailor ISO 27001 controls to meet your business\'s specific requirements.',
                'Risk Assessment: Evaluate information security risks according to iso 27001 auditor certification.',
                'Controls Integration: Identify and implement controls that align with ISO 27001.',
                'Documentation: Prepare documentation in line with ISO standards audit.'
            ]
        },
        {
            title: '03. Internal Audits',
            content: [
                'Regular Audits: Conduct internal audits covering ISO 27001 requirements.',
                'Nonconformity Resolution: Address identified nonconformities and enhance security measures.',
                'Corrective Actions: Implement corrective actions to strengthen security and compliance.'
            ]
        },
        {
            title: '04. Management Review',
            content: [
                'Leadership Involvement: Conduct management reviews focusing on ISMS performance.',
                'Continuous Improvement: Incorporate recommendations and identify areas for enhancement.'
            ]
        },
        {
            title: '05. Certification Audit',
            content: [
                'Stage 1 Audit: Certification body reviews documentation and according to ISO 27001 services.',
                'Stage 2 Audit: On-site audit assesses ISMS implementation, focusing on ISO 27001 standards.',
                'Holistic Assessment: Findings are evaluated in the context of ISO 27001, leading to a comprehensive certification decision.'
            ]
        },
        {
            title: '06. Post-Certification and Surveillance Audits',
            content: [
                'Ongoing Monitoring: Implement surveillance audits to ensure continued ISO 27001 compliance.',
                'Recertification: Periodic renewal ensures your firm\'s alignment with ISO 27001 remains robust.'
            ]
        }
    ];

    return (
        <div className='bg-gray-200 px-4 lg:px-48'>
            <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left py-10">{heading}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 pb-4 bg-gray-200">
                {menuItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="w-full lg:h-auto"
                    >
                        {/* For small screens, use Dropdown component */}
                        <div className="block lg:hidden">
                            <Dropdown title={item.title} content={item.content} />
                        </div>
                        {/* For larger screens, display the content in a box */}
                        <div className="hidden lg:block h-fit border-x-2 rounded-2xl border-blue-200xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-t-2xl py-2">
                                {item.title}
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 text-left border-2 rounded-b-2xl border-blue-500 p-4">
                                {item.content.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ISOCertificationJourneyMenu;
