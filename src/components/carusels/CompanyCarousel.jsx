import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { companyCarouselData } from './companyCarousel';

const CompanyCarousel = () => {
    const sliderRef = useRef(null);

    const PrevArrow = ({ className, onClick }) => (
        <button
            className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10`}
            onClick={onClick}
            style={{ display: "none" }}
        >
            <div className='absolute top-[300px] left-[30px] w-[45px] h-[45px] border bg-[white] rounded-[50%] flex items-center justify-center'>
                <FaArrowLeft className="text-[black] text-[18px]" />
            </div>
        </button>
    );

    const NextArrow = ({ className, onClick }) => (
        <button
            className={`${className}`}
            onClick={onClick}
            style={{ display: "none" }}
        >
            <div className='absolute top-[300px] right-[1360px] bg-white rounded-[50%] flex items-center justify-center'>
                <FaArrowRight className="text-[black] text-[18px]" />
            </div>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-[100%] 2xl:w-[1440px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[800px] xl:h-[900px] mb-[20px] mt-[100px] mx-auto relative ">
            <div className='2xl:w-[100%] w-[100%] mx-auto'>
                <div className='w-[95%] 2xl:w-[100%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] mx-auto'>
                    <h2 className='2xl:text-[34px] xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] md:mt-[120px] text-[20px] font-medium w-[100%]'>Комплексное оснащение кабинетов</h2>
                </div>
                <Slider ref={sliderRef} {...settings} className='w-[95%] 2xl:w-[100%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] mx-auto mt-[20px] space-x-1' >
                    {companyCarouselData.map((item, index) => (
                        <div className='2xl:w-[55%] xl:w-[80%] mx-auto ' key={index}>
                            <div className="2xl:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] sm:w-[100%] w-[100%] justify-between items-center mx-auto">
                                <div className="w-[98%] h-[360px] 2xl:w-[98%] xl:w-[98%] lg:w-[98%] md:w-[98%] sm:w-[98%] 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-[400px] border rounded-[20px]">
                                    <div className="w-full h-[90%]">
                                        <img
                                            src={item.img}
                                            alt="Complex 1"
                                            className="w-full h-full object-cover rounded-tr-[20px] rounded-tl-[20px]"
                                        />
                                    </div>
                                    <div className='w-[100%] h-[10%] flex items-center'>
                                        <p className="mt-[15px] ml-[35px] pb-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] text-[14px]">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='w-[95%] 2xl:w-[100%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] h-[100px] flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between justify-center items-center mx-auto '>
                    <div className='2xl:flex xl:flex lg:flex md:flex sm:flex gap-2 hidden'>
                        <div className='w-[45px] h-[45px] border border-gray-300 rounded-full  flex items-center justify-center cursor-pointer' onClick={() => sliderRef.current.slickPrev()}>
                            <FaArrowLeft />
                        </div>
                        <div className='w-[45px] h-[45px] border border-gray-300 rounded-full  flex items-center justify-center cursor-pointer' onClick={() => sliderRef.current.slickNext()}>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className='2xl:flex 2xl:gap-3 gap-3 xl:flex xl:gap-3 lg:flex md:flex sm:flex block mt-[10px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 items-center'>
                        <button className='block w-[220px] h-[40px] border rounded-[20px] font-semibold text-[#088269] border-[#088269] 2xl:text-[14px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[12px] text-[12px] '>Бесплатная консультация</button>
                        <button className='block ml-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-[10px] w-[200px] h-[40px] border rounded-[20px] font-semibold bg-[#088269] border-[#088269] text-white 2xl:text-[16px] xl:text-[14px] lg:text-[13px]  md:text-[12px] sm:text-[12px] text-[12px]'>Рассчитать стоимость</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCarousel;
