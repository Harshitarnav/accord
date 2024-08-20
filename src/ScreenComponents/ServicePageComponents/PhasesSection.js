// import React from 'react';

// function PhasewiseSection() {
//     const steps = [
//         {
//             number: '01',
//             title: "Project Initiation and Planning",
//             description: "Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.",
//             bgColor: 'bg-gradient-to-r'
//         },
//         {
//             number: '02',
//             title: "Objective Analysis and Gap Identification",
//             description: "Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.",
//             bgColor: 'bg-gradient-to-r'
//         },
//         {
//             number: '03',
//             title: "Control Design and Documentation",
//             description: "Design controls aligned with objectives and meticulously document the SOC auditor control framework.",
//             bgColor: 'bg-gradient-to-r'
//         },
//         {
//             number: '04',
//             title: "Rigorous Testing and Issue Log Generation",
//             description: "Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.",
//             bgColor: 'bg-gradient-to-r'
//         },
//         {
//             number: '05',
//             title: "Report Generation and Finalization",
//             description: "Transition from draft to final SOC report, ensuring accuracy and comprehensive coverage.",
//             bgColor: 'bg-gradient-to-r'
//         },
//         {
//             number: '06',
//             title: "Ongoing Monitoring and Compliance Maintenance",
//             description: "Offer continuous vigilance and guidance, sustaining compliance excellence in SOC 1 audit.",
//             bgColor: 'bg-gradient-to-r'
//         }
//     ];

//     return (
//         <div className="px-4 lg:px-8 my-8">
//             <h2 className="text-3xl font-bold text-left text-black mx-4 lg:mx-48">
//                 PROCESS
//             </h2>
//             <div className="relative my-12">
//                 <div className="lg:flex hidden absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full"></div>
//                 <div className="space-y-8">
//                     {steps.map((step, index) => (
//                         <div
//                             key={index}
//                             className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//                         >
//                             <div className={`flex justify-center rounded-2xl border-2 border-black w-full lg:w-1/3 ${step.bgColor} ${index % 2 === 0 ? 'ml-4 lg:ml-64' : 'mr-4 lg:mr-64'}`}>
//                                 <div className="px-4 rounded-l-2xl focus:outline-none focus:ring-2 bg-gray-500 flex items-center py-10">
//                                     <p className="text-black text-3xl">{step.number}</p>
//                                 </div>
//                                 <div className="flex flex-col justify-center text-left mx-4 py-2">
//                                     <div className="text-black text-lg font-bold">
//                                         {step.title}
//                                     </div>
//                                     <div className="text-black text-sm">
//                                         {step.description}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PhasewiseSection;

// import React from 'react';
// import './PhasewiseSection.css';

// function PhasewiseSection() {
//     const steps = [
//         {
//             number: '01',
//             title: "Project Initiation and Planning",
//             description: "Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.",
//             icon: '🔍' // You can replace this with an actual image/icon
//         },
//         {
//             number: '02',
//             title: "Objective Analysis and Gap Identification",
//             description: "Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.",
//             icon: '📊'
//         },
//         {
//             number: '03',
//             title: "Control Design and Documentation",
//             description: "Design controls aligned with objectives and meticulously document the SOC auditor control framework.",
//             icon: '🛠️'
//         },
//         {
//             number: '04',
//             title: "Rigorous Testing and Issue Log Generation",
//             description: "Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.",
//             icon: '📝'
//         },
//     ];

//     return (
//         <div className="phasewise-section">
//             <h2 className="text-3xl font-bold text-left text-black mx-4 lg:mx-48">
//                 PROCESS
//             </h2>
//             {steps.map((step, index) => (
//                 <div key={index} className={`step-container ${index % 2 === 0 ? 'left' : 'right'}`}>
//                     <div className="step-content">
//                         <div className="icon-circle">{step.icon}</div>
//                         <div className="step-text">
//                             <h3>{step.title}</h3>
//                             <p>{step.description}</p>
//                         </div>
//                     </div>
//                     {/* <div className="step-number">
//                         <span>STEP {step.number}</span>
//                     </div> */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default PhasewiseSection;

import React from 'react';
// import './Infographic.css';

function PhasewiseSection() {
    const steps = [
        {
            number: '01',
            title: "Your Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            icon: '💡', // Replace with your icons or images
        },
        {
            number: '02',
            title: "Your Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            icon: '🔧',
        },
        {
            number: '03',
            title: "Your Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            icon: '⏰',
        },
        {
            number: '04',
            title: "Your Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            icon: '📈',
        },
        {
            number: '05',
            title: "Your Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            icon: '🏆',
        },
    ];

    return (
        <div className="relative flex flex-col items-center py-20 bg-gray-100">
            {steps.map((step, index) => (
                <div className="flex flex-row w-full" key={index}>
                    {index % 2 === 0 ? (
                        <>
                            <div className="w-1/2 flex justify-end">
                                <div className="max-w-xs p-6 bg-white rounded-lg shadow-md mr-6">
                                    <h3 className="mb-2 text-xl font-bold text-gray-800">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center w-24 h-24 text-white bg-teal-500 rounded-full shadow-md">
                                <span className="text-2xl">{step.icon}</span>
                                <span className="absolute bottom-0 px-3 py-1 text-sm font-bold text-gray-700 bg-white rounded-full transform translate-y-1/2">
                                    {step.number}
                                </span>
                            </div>
                            <div className="w-1/2 flex justify-start">
                                <div className="w-32 h-64 border-l-4 border-dashed border-primary rounded-bl-full rounded-tl-full"></div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-1/2 flex justify-end">
                                <div className="w-32 h-64 border-l-4 border-dashed border-primary rounded-br-full rounded-tr-full"></div>
                            </div>
                            <div className="relative flex items-center justify-center w-24 h-24 text-white bg-teal-500 rounded-full shadow-md">
                                <span className="text-2xl">{step.icon}</span>
                                <span className="absolute bottom-0 px-3 py-1 text-sm font-bold text-gray-700 bg-white rounded-full transform translate-y-1/2">
                                    {step.number}
                                </span>
                            </div>
                            <div className="w-1/2 flex justify-start">
                                <div className="max-w-xs p-6 bg-white rounded-lg shadow-md ml-6">
                                    <h3 className="mb-2 text-xl font-bold text-gray-800">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
    
}    

export default PhasewiseSection;


