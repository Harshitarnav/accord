import React from 'react';

function TypeOfSoc({options}) {

    return (
        <div className="py-12">
            <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left mb-10 px-4 lg:px-48">TYPES OF ASSESSMENTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 justify-items-center px-4 lg:px-48">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-start w-full text-left bg-gray-100 rounded-2xl p-6 shadow-md">
                        {option.images && <img src={option.images} alt={option.title} className="text-blue-500 text-3xl mb-4"/>}
                        <h3 className="text-xl font-semibold">{option.title}</h3>
                        <p className="mt-2 text-gray-600">{option.description}</p>
                    </div>
                ))}
            </div>

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-10 px-8 sm:px-16 lg:px-48 bg-blue-500 text-center">
                <div>
                    <h3 className="text-4xl font-bold text-white">700+</h3>
                    <p className="text-gray-300">Trusted Clients</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-white">7+</h3>
                    <p className="text-gray-300">Awards</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-white">34+</h3>
                    <p className="text-gray-300">Years of Experience</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-white">115+</h3>
                    <p className="text-gray-300">Experts</p>
                </div>
            </section>
        </div>
    );
}

export default TypeOfSoc;
