import React from "react";

const pagelinks = [
    {
        title: 'Company',
        links: [
            { title: 'About Us', url: '/' },
            { title: 'Services', url: '/about' },
            { title: 'Blogs', url: '/' },
            { title: 'Contact Us', url: '/about' },
        ]
    },
    {
        title: 'Services',
        links: [
            { title: 'Risk Assurance', url: '/' },
            { title: 'Incorporation', url: '/about' },
            { title: 'CPA services', url: '/' },
            { title: 'Cross border compliances', url: '/about' },
        ]
    },
    {
        title: 'Connect',
        links: [
            { title: 'US', url: '/' },
            { title: 'UK', url: '/about' },
            { title: 'India', url: '/' },
        ]
    }
];

function BottomBar() {
    const logo = require('../assets/images/TrainRex.png');

    return (
        <footer className="bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-between">
                    {/* Left Section */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Accorp</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-black hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-black hover:text-blue-500"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-black hover:text-blue-500"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-black hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-black hover:text-blue-500"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Dynamic Sections */}
                    {pagelinks.map((section, index) => (
                        <div key={index} className="text-left w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}><a href={link.url} className="text-gray-700 hover:text-black">{link.title}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="flex flex-wrap justify-between">
                        {/* Country Sections */}
                        {[
                            { country: 'US', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
                            { country: 'UK', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
                            { country: 'CANADA', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
                            { country: 'SPAIN', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
                            { country: 'INDIA', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
                        ].map((location, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-4 text-left">
                                <h3 className="font-bold text-lg">{location.country}</h3>
                                <p className="text-gray-600 text-sm">{location.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto text-center text-black py-4">
                <p>All Rights Reserved.&copy; 2024 Accorp Partner INC.</p>
            </div>
        </footer>
    );
}

export default BottomBar;
