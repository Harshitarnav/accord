import React from 'react';

const Subscribe = () => {
    return (
        <section className="flex flex-col sm:flex-row justify-around items-center py-10 px-8 sm:px-16 md:px-48 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-0">Subscribe to Stay Informed</h2>
            <div className="flex w-full sm:w-auto justify-center rounded-full overflow-hidden border-2 border-white shadow-md">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto px-4 py-2 rounded-l-full border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-[#0F52BA] text-white px-6 py-2 rounded-r-full font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default Subscribe;
