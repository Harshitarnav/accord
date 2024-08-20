import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const BlogSection = () => {
    const sliderRef = useRef(null);

    const blogs = [
        // {
        //     year: 2023,
        //     title: "Lorem ipsum dolor sit amet consectetur. In.",
        // },
        {
            year: 2023,
            title: "Lorem ipsum dolor sit amet",
        },
        {
            year: 2023,
            title: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            year: 2022,
            title: "Lorem ipsum dolor sit amet consectetur. Diam in vel nulla.",
        }
    ];

    const NextArrow = ({ onClick }) => {
        return (
            <div className="text-xl lg:text-3xl cursor-pointer" onClick={onClick}>
                <HiArrowNarrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="text-xl lg:text-3xl cursor-pointer" onClick={onClick}>
                <HiArrowNarrowLeft />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,  // Use custom next arrow
        // prevArrow: <PrevArrow />,  // Use custom previous arrow
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="py-12 px-4 lg:px-12 bg-white">
            <div className="flex justify-between items-center mb-8 sm:px-8 lg:px-6">
                <h2 className="text-xl font-bold">Blogs</h2>
                <div className="flex space-x-4 pr-4">
                    <div onClick={() => sliderRef.current.slickPrev()}>
                        <PrevArrow />
                    </div>
                    <div onClick={() => sliderRef.current.slickNext()}>
                        <NextArrow />
                    </div>
                </div>
            </div>
            
            <Slider ref={sliderRef} {...settings}>
                {blogs.map((blog, index) => (
                    <div key={index} className="p-4">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <p className="text-gray-500 mb-2">{blog.year}</p>
                            <p className="text-blue-500 font-semibold">{blog.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogSection;
