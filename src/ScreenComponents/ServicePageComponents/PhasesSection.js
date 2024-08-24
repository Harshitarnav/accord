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
      <div className="relative lg:flex hidden items-center justify-center h-[700px] bg-white">
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
                      className={`flex flex-col items-center justify-center p-2 rounded-full transition-transform duration-500 text-white
                   
                      group-hover:scale-110`}
                      style={{
                        background: `radial-gradient(circle, rgba(15,82,186,1) 0%, rgba(15,82,186,0.7) 90%, rgba(15,82,186,0.4) 100%)`,
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
