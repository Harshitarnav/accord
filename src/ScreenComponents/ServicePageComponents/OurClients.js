import React from 'react';

const ServicePageImages = ({images}) => {
  
    return (
      <div className="text-center px-4 lg:px-48 pb-12 lg:pb-56 justify-center">
        <h2 className="text-3xl font-bold py-8 text-center lg:text-left lg:pb-24">OUR CLIENTS</h2>
        <div className="flex flex-wrap gap-x-12 justify-center items-center px-16 space-y-8">
          {images.map((img, index) => (
            <div
              key={index}
              className={`flex justify-center w-[320px] h-[150px] ${index >2 ? 'lg:col-span-2 lg:row-start-2' : ''}`}
            >
              <img src={img} alt={`Service ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default ServicePageImages;
