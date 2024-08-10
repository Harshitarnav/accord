import React from 'react';

function PhasewiseSection() {
    const steps = [
        {
            number: '01',
            title: "Project Initiation and Planning",
            description: "Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.",
            bgColor: 'bg-gradient-to-r'
        },
        {
            number: '02',
            title: "Objective Analysis and Gap Identification",
            description: "Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.",
            bgColor: 'bg-gradient-to-r'
        },
        {
            number: '03',
            title: "Control Design and Documentation",
            description: "Design controls aligned with objectives and meticulously document the SOC auditor control framework.",
            bgColor: 'bg-gradient-to-r'
        },
        {
            number: '04',
            title: "Rigorous Testing and Issue Log Generation",
            description: "Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.",
            bgColor: 'bg-gradient-to-r'
        },
        {
            number: '05',
            title: "Report Generation and Finalization",
            description: "Transition from draft to final SOC report, ensuring accuracy and comprehensive coverage.",
            bgColor: 'bg-gradient-to-r'
        },
        {
            number: '06',
            title: "Ongoing Monitoring and Compliance Maintenance",
            description: "Offer continuous vigilance and guidance, sustaining compliance excellence in SOC 1 audit.",
            bgColor: 'bg-gradient-to-r'
        }
    ];

    return (
        <div className="px-4 lg:px-8 my-8">
            <h2 className="text-3xl font-bold text-left text-black mx-4 lg:mx-48">
                PROCESS
            </h2>
            <div className="relative my-12">
                <div className="lg:flex hidden absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full"></div>
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className={`flex justify-center rounded-2xl border-2 border-black w-full lg:w-1/3 ${step.bgColor} ${index % 2 === 0 ? 'ml-4 lg:ml-64' : 'mr-4 lg:mr-64'}`}>
                                <div className="px-4 rounded-l-2xl focus:outline-none focus:ring-2 bg-gray-500 flex items-center py-10">
                                    <p className="text-black text-3xl">{step.number}</p>
                                </div>
                                <div className="flex flex-col justify-center text-left mx-4 py-2">
                                    <div className="text-black text-lg font-bold">
                                        {step.title}
                                    </div>
                                    <div className="text-black text-sm">
                                        {step.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhasewiseSection;
