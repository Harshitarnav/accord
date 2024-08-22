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

// const data = [
//     {
//         number: "01",
//         title: "Your Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         icon: "💡", // Replace with actual icon component or image
//     },
//     {
//         number: "02",
//         title: "Your Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         icon: "🚀",
//     },
//     {
//         number: "03",
//         title: "Your Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         icon: "⏱️",
//     },
//     {
//         number: "04",
//         title: "Your Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         icon: "📊",
//     },
//     {
//         number: "05",
//         title: "Your Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         icon: "🏰",
//     },
// ];

// const InfoItem = ({ number, title, description, icon }) => (
//     <div className="flex items-center mb-8 bg-secondary">
//         <div className="flex-shrink-0">
//             <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
//                 {number}
//             </div>
//         </div>
//         <div className="ml-6 p-4 rounded-r-full bg-teal-500 text-white flex-grow relative">
//             <div className="absolute top-0 right-0 mt-2 mr-4 text-xl">{icon}</div>
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <p className="text-sm">{description}</p>
//         </div>
//     </div>
// );

// const SideBar = () => (
//     <div className="flex flex-col items-center space-y-6">
//         <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-transparent"></div>
//         {Array(4).fill("").map((_, index) => (
//             <div key={index} className="w-2 h-12 bg-black"></div>
//         ))}
//         <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-transparent"></div>
//     </div>
// );

// const SemiCircleBorder = ({ size = '500px', borderColor = 'border-secondary', borderWidth = 'border-4' }) => {
//     return (
//         <div
//             className={`w-${size} h-${size} ${borderWidth} ${borderColor} border-dotted rounded-t-full border-b-0 transform rotate-90`}
//             style={{
//                 width: size,
//                 height: `calc(${size} / 2)`,
//             }}
//         ></div>
//     );
// };

// const PhasewiseSection = () => (
//     <div className="container mx-auto px-4 py-12 flex">
//         <div className="w-1/4 my-auto flex flex-col items-center">
//             <SemiCircleBorder />
//         </div>
//         <div className="w-3/4">
//             {data.map((item, index) => (
//                 <InfoItem
//                     key={index}
//                     number={item.number}
//                     title={item.title}
//                     description={item.description}
//                     icon={item.icon}
//                 />
//             ))}
//         </div>
//     </div>
// );

// export default PhasewiseSection;

// import React from 'react';

// const data = [
//     {
//         number: "01",
//         title: "Project Initiation and Planning",
//         description: "Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.",
//         icon: "💡",
//     },
//     {
//         number: "02",
//         title: "Objective Analysis and Gap Identification",
//         description: "Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.",
//         icon: "🚀",
//     },
//     {
//         number: "03",
//         title: "Control Design and Documentation",
//         description: "Design controls aligned with objectives and meticulously document the SOC auditor control framework.",
//         icon: "⏱️",
//     },
//     {
//         number: "04",
//         title: "Rigorous Testing and Issue Log Generation",
//         description: "Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.",
//         icon: "📊",
//     },
//     {
//         number: "05",
//         title: "Report Generation and Finalization",
//         description: "Transition from draft to final SOC report, ensuring accuracy and comprehensive coverage.",
//         icon: "🏰",
//     },
// ];

// const InfoItem = ({ number, title, description, icon, alignment, lineStyle }) => (
//     <div className={`flex items-center mb-8 ${alignment} relative`}>
//         <div className="flex-shrink-0">
//             <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
//                 {number}
//             </div>
//         </div>
//         <div className="ml-6 p-4 rounded-r-full bg-teal-500 text-white flex-grow relative">
//             <div className="absolute top-0 right-0 mt-2 mr-4 text-xl">{icon}</div>
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <p className="text-sm">{description}</p>
//         </div>
//         <div className={`absolute -left-20 top-40 transform -translate-y-1/2 w-28 h-1 bg-black ${lineStyle}`}></div>
//     </div>
// );

// const SemiCircleBorder = ({ sizeW = '600px', sizeH = '600px', borderColor = 'border-secondary', borderWidth = 'border-4' }) => {
//     return (
//         <div
//             className={`w-${sizeW} h-${sizeH} ${borderWidth} ${borderColor} border-dotted rounded-t-full border-b-0 transform rotate-90`}
//             style={{
//                 width: sizeW,
//                 height: `calc(${sizeH} / 2)`,
//             }}
//         ></div>
//     );
// };

// const PhasewiseSection = () => {
//     const alignments = [
//         "justify-start ml-0",
//         "justify-start ml-20",
//         "justify-start ml-40",
//         "justify-start ml-20",
//         "justify-start ml-0",
//     ];

//     const lineStyles = [
//         "-rotate-45",
//         "-rotate-30",
//         "rotate-0",
//         "rotate-30",
//         "rotate-45",
//     ];

//     return (
//         <div className="container mx-auto px-4 py-12 flex relative">
//             <div className="w-1/4 my-auto flex flex-row items-center relative">
//                 <SemiCircleBorder />
//             </div>
//             <div className="w-3/4 flex flex-col justify-between">
//                 {data.map((item, index) => (
//                     <InfoItem
//                         key={index}
//                         number={item.number}
//                         title={item.title}
//                         description={item.description}
//                         icon={item.icon}
//                         alignment={alignments[index]}
//                         lineStyle={lineStyles[index]}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PhasewiseSection;


// import React from 'react';

// const data = [
//     {
//         number: "01",
//         title: "Project Initiation and Planning",
//         description: "Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.",
//         icon: "💡", // Replace with actual icon component or image
//         size: 100
//     },
//     {
//         number: "02",
//         title: "Objective Analysis and Gap Identification",
//         description: "Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.",
//         icon: "🚀",
//         size: 120
//     },
//     {
//         number: "03",
//         title: "Control Design and Documentation",
//         description: "Design controls aligned with objectives and meticulously document the SOC auditor control framework.",
//         icon: "⏱️",
//         size: 140
//     },
//     {
//         number: "04",
//         title: "Rigorous Testing and Issue Log Generation",
//         description: "Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.",
//         icon: "📊",
//         size: 160
//     },
//     {
//         number: "05",
//         title: "Report Generation and Finalization",
//         description: "Transition from draft to final SOC report, ensuring accuracy and comprehensive coverage.",
//         icon: "🏰",
//         size: 165
//     },
// ];

// const PhasewiseSection = () => {
//   const radius = 200; // Radius of the circle
//   const center = 250; // Center of the circle

//   return (
//     <div className="relative flex items-center justify-center h-[700px] bg-white">
//         <div className="absolute w-40 h-40 rounded-full flex items-center justify-center text-white text-lg font-bold flex-col">
//             <div className="text-center text-secondary">Research Process</div>
//             <div className="text-center text-secondary">Steps</div>
//         </div>
//         <div>
//             {data.map((step, index) => {
//             const angle = (index / data.length) * 360;
//             const x = 3.5 * center + radius * Math.cos((angle * Math.PI) / 180);
//             const y = 1.5 * center + radius * Math.sin((angle * Math.PI) / 180);

//             // Determine the side based on the angle
//             const isRightSide = angle <= 90 || (angle > 270 && angle <= 360);
//             const placardX = isRightSide
//                 ? 140 + 20 // 10px gap to the right
//                 : -140 - 200; // 10px gap to the left
//             const placardY = 80;

//             return (
//                 <div
//                     key={step.number}
//                     className={`absolute flex flex-col items-center justify-center text-center`}
//                     style={{
//                         width: 160,
//                         height: 160,
//                         top: `${y}px`,
//                         left: `${x}px`,
//                         transform: "translate(-50%, -50%)",
//                     }}
//                 >
//                     <div
//                         className={`flex flex-col items-center justify-center p-2 rounded-full ${
//                         index % 2 === 0
//                             ? "bg-blue-600 text-white"
//                             : "bg-blue-300 text-blue-900"
//                         }`}
//                         style={{
//                         width: step.size,
//                         height: step.size,
//                         }}
//                     >
//                         <div className="text-3xl font-bold">{step.number}</div>
//                     </div>
//                     <div
//                         className="absolute mt-2 p-4 bg-gray-100 text-blue-900 rounded-lg shadow-lg text-left"
//                         style={{
//                         width: 350,
//                         top: `${placardY}px`,
//                         left: `${placardX}px`,
//                         transform: "translateY(-40%)", // Adjust the vertical alignment
//                         }}
//                     >
//                         <p className="text-lg font-bold">{step.title}</p>
//                         <p className="hidden hover:flex text-sm">{step.description}</p>
//                     </div>
//                 </div>
//             );
//         })}
//         </div>
//     </div>
//   );
// };

// export default PhasewiseSection;


import React from 'react';

const data = [
  {
    number: "01",
    title: "Project Initiation and Planning",
    description:
      "Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.",
    icon: "💡", // Replace with actual icon component or image
    size: 100,
  },
  {
    number: "02",
    title: "Objective Analysis and Gap Identification",
    description:
      "Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.",
    icon: "🚀",
    size: 120,
  },
  {
    number: "03",
    title: "Control Design and Documentation",
    description:
      "Design controls aligned with objectives and meticulously document the SOC auditor control framework.",
    icon: "⏱️",
    size: 140,
  },
  {
    number: "04",
    title: "Rigorous Testing and Issue Log Generation",
    description:
      "Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.",
    icon: "📊",
    size: 160,
  },
  {
    number: "05",
    title: "Report Generation and Finalization",
    description:
      "Transition from draft to final SOC report, ensuring accuracy and comprehensive coverage.",
    icon: "🏰",
    size: 165,
  },
];

const PhasewiseSection = () => {
    const radius = 200; // Radius of the circle
    const center = 250; // Center of the circle
  
    return (
      <div className="relative flex items-center justify-center h-[700px] bg-white">
          <div className="absolute w-40 h-40 rounded-full flex items-center justify-center text-white text-lg font-bold flex-col">
              <div className="text-center text-gray-800 text-3xl">Our</div>
              <div className="text-center text-gray-800 text-3xl">Processes</div>
          </div>
          <div>
              {data.map((step, index) => {
              const angle = (index / data.length) * 360;
              const x = 3.5 * center + radius * Math.cos((angle * Math.PI) / 180);
              const y = 1.5 * center + radius * Math.sin((angle * Math.PI) / 180);
  
              // Determine the side based on the angle
              const isRightSide = angle <= 90 || (angle > 270 && angle <= 360);
              const placardX = isRightSide
                  ? 140 + 20 // 10px gap to the right
                  : -140 - 200; // 10px gap to the left
              const placardY = 80;
  
              return (
                  <div
                  key={step.number}
                  className={`group absolute flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105`}
                  style={{
                      width: 160,
                      height: 160,
                      top: `${y}px`,
                      left: `${x}px`,
                      transform: "translate(-50%, -50%)",
                  }}
                  >
                  <div
                      className={`flex flex-col items-center justify-center p-2 rounded-full transition-transform duration-500 ${
                      index % 2 === 0
                          ? "bg-blue-600 text-white"
                          : "bg-blue-300 text-blue-900"
                      } group-hover:scale-110`}
                      style={{
                      width: step.size,
                      height: step.size,
                      }}
                  >
                      <div className="text-3xl font-bold">{step.number}</div>
                  </div>
                  <div
                      className="absolute mt-2 p-4 bg-gray-100 text-blue-900 rounded-lg shadow-lg text-left transition-all duration-500 group-hover:w-[500px] group-hover:h-auto group-hover:p-6 h-20 hover:h-48"
                      style={{
                      width: 350,
                      top: `${placardY}px`,
                      left: `${placardX}px`,
                      transform: "translateY(-40%)", // Adjust the vertical alignment
                      }}
                  >
                      <p className="text-lg font-bold transition-all duration-500 group-hover:text-left group-hover:w-full">
                          {step.title}
                      </p>
                      <p className="text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          {step.description}
                      </p>
                  </div>
                  </div>
              );
              })}
          </div>
      </div>
    );
  };
  
  export default PhasewiseSection;