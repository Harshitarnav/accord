import React from 'react';
import image1 from '../../assets/ServicePage/ISO/aviva.png';
import image2 from '../../assets/ServicePage/ISO/xhipment.png';
import image3 from '../../assets/ServicePage/ISO/hono.webp';
import image4 from '../../assets/ServicePage/ISO/gentronics.png';
import image5 from '../../assets/ServicePage/ISO/salesken.png';

const ServicePageImages = () => {
    const images = [image1, image2, image3, image4, image5];
  
    return (
      <div className="text-center px-4 lg:px-48 pb-12 lg:pb-56 justify-center">
        <h2 className="text-3xl font-bold py-8 text-center lg:text-left lg:pb-24">OUR CLIENTS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center px-8">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Service ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    );
  };
  
export default ServicePageImages;
