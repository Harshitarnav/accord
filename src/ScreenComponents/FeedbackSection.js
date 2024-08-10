import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeedbackSection = () => {
    const feedbacks = [
        {
            text: "When I was looking for a new way to fund my business, Accorp came highly recommended from my friend. It’s an amazing service that offers funding in variety of different fields. The company is also very transparent and easy to work with.",
            name: "Chief Executive Officer",
            company: "Advertising Agency, India"
        },
        {
            text: "I work in the industry and I use Accorp to audit, review, and compile a lot of the documents we came across. It’s always so helpful having it there for me when I need it. What I like most about it is the timeliness of reports - they’re never late.",
            name: "Chief Financial Officer",
            company: "IT Company, US"
        },
        {
            text: "I’ve gone through the process of incorporating in the US and can’t believe how easy and straightforward it was with Accorp. The service is great and I would recommend to anyone.",
            name: "Co-Founder",
            company: "Fintech Company, UK"
        },
        {
            text: "Accorp's services have been crucial to our expansion strategy, providing invaluable insights and compliance assistance.",
            name: "Operations Manager",
            company: "Retail Company, Germany"
        },
        {
            text: "Their expertise in cross-border regulations is unmatched. We've successfully navigated complex regulatory landscapes with their help.",
            name: "Legal Advisor",
            company: "Healthcare Company, Japan"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="py-12 px-4 sm:px-8 lg:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-8 text-center">Our happy clients say about us</h2>
            <Slider {...settings}>
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="p-4">
                        <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 h-64 sm:h-48 flex flex-col justify-between">
                            <p className="text-gray-700 mb-4">"{feedback.text}"</p>
                            <div>
                                <p className="font-semibold">{feedback.name}</p>
                                <p className="text-gray-500">{feedback.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeedbackSection;
