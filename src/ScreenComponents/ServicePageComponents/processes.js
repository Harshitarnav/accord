import React from 'react';
import Dropdown from '../../components/Dropdown'; // Ensure to import the updated Dropdown component
import './processbox.css'

const ISOCertificationJourneyMenu = ({heading, menuItems}) => {
    return (
        <div className='bg-gray-200 px-4 lg:px-48 py-10'>
            <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left pb-5">{heading} Journey</h2>
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
                        {/* <div className="hidden lg:block h-fit border-x-2 rounded-2xl border-blue-200xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-t-2xl py-2">
                                {item.title}
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 text-left border-2 rounded-b-2xl border-blue-500 p-4">
                                {item.content.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div> */}
                        <div className="hidden lg:block transform transition-transform duration-300 hover:scale-105 rounded-lg w-full py-4">
                            <div className="relative">
                                <div className="absolute top-8 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-700 text-white p-3 rounded-md flex items-center w-full max-w-xs md:max-w-md lg:max-w-xl">
                                    <div className="flex-shrink-0 text-left pb-2 pl-2">
                                        <div className="text-2xl font-bold">0{index + 1}</div> {/* Dynamic step number */}
                                        <div className="text-xs">STEP</div>
                                    </div>
                                    <div className="ml-4 flex items-center">
                                        <div className="text-lg font-bold text-left">{item.title}</div>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside pr-4 pl-4 md:pr-6 md:pl-6 text-sm ml-4 md:ml-8 text-left border-2 border-gray-700 rounded-2xl h-[310px] pt-32 overflow-y-auto">
                                    {item.content.map((point, idx) => (
                                        <li key={idx} className="pl-1 flex items-start break-words overflow-wrap-anywhere">
                                            <span className="flex-shrink-0">•</span>
                                            <span className="ml-2">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                ))}
                {/* <div class="flex items-center bg-gradient-to-r from-blue-500 via-blue-500 to-blue-700 rounded-lg p-6 shadow-lg max-w-md">
                    <div class="bg-white text-red-600 text-center p-4 rounded-l-lg font-bold z-10">
                        <h2 class="text-4xl">01</h2>
                        <p class="text-sm tracking-wider">STEP</p>
                    </div>
                    <div class="bg-white p-4 rounded-r-lg shadow-inner flex-1">
                        <img src="icon.png" alt="Icon" class="block mx-auto mb-4 w-12 h-auto"/>
                        <h3 class="text-red-600 text-lg font-bold text-center">LOREM IPSUM</h3>
                        <p class="text-gray-600 text-sm text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis gravida arcu.
                        </p>
                    </div>
                </div> */}

                {/* <div className="rounded-lg w-80 p-4">
                    <div className="text-3xl mr-2">
                        🔍
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-700 text-white p-3 rounded-md flex items-center">
                        <div className="flex-shrink-0 text-left">
                            <div className="text-2xl font-bold">01</div>
                            <div className="text-xs">STEP</div>
                        </div>
                        <div className="ml-4 flex items-center">
                            <div className="text-lg font-bold">RESEARCH</div>
                        </div>
                    </div>
                    <div className="p-4 text-sm ml-8 text-left border-x-2 border-b-2 border-gray-700 rounded-b-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla nisl, euismod at finibus interdum, varius at tellus.
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default ISOCertificationJourneyMenu;
