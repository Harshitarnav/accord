import React from 'react';
import pcaob from '../assets/images.png';

function ClientsSection() {
    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">OUR CLIENTS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                {Array.from({ length: 10 }).map((_, imgIndex) => (
                    <img key={imgIndex} src={pcaob} alt={`Client ${imgIndex + 1}`} className="h-14" />
                ))}
            </div>
        </div>
    );
}

export default ClientsSection;
