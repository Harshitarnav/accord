import React from 'react';
import world_map from '../assets/world_map_PNG28.png'

function LocationSection() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                {/* Left Column: Text and List */}
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-left lg:text-center">Lorem ipsum dolor sit amet</h2>
                    <p className="text-gray-600 mb-6 text-left lg:text-center">
                        Lorem ipsum dolor sit amet consectetur. Id id amet sed magna
                    </p>
                    <ul className="space-y-4 px-6">
                        <li className="flex items-center text-lg font-semibold">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                            USA
                        </li>
                        <li className="flex items-center text-lg font-semibold">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                            UK
                        </li>
                        <li className="flex items-center text-lg font-semibold">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                            Canada
                        </li>
                        <li className="flex items-center text-lg font-semibold">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                            Spain
                        </li>
                        <li className="flex items-center text-lg font-semibold">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                            India
                        </li>
                    </ul>
                </div>

                {/* Right Column: Map */}
                <div className="lg:w-2/3">
                    <img
                        src={world_map}
                        alt="World Map"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default LocationSection;
