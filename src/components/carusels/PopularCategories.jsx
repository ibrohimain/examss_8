import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PopularData } from './Popular';

const PopularCategories = () => {

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
        <div className='w-[100%] h-[550px] mx-auto mt-[10px] mb-[40px] '>
            <div className='2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[100%] 2xl:flex xl:flex lg:flex md:flex  items-center mx-auto'>
                <div className='2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[20%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] h-[25%] p-4 '>
                    <h2 className='text-[30px] font-semibold mt-[20px]'>Популярные категории</h2>

                </div>
                <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] h-[75%] '>
                    <Slider ref={sliderRef} {...settings} className='w-full mx-auto mt-[50px]'>
                        {PopularData.map((item, index) => (
                            <div key={index} className='px-2'>
                                <div className="w-[100%] h-[280px] border rounded-[20px]">
                                    <div className="w-[100%] h-[70%] bg-[white] flex items-center justify-center relative rounded-tr-[20px] rounded-tl-[20px] border">
                                        <img
                                            src={item.img}
                                            alt={`Complex ${index + 1}`}
                                            className="w-[50%] h-[70%] object-cover rounded-tr-[20px] rounded-tl-[20px]"
                                            style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                                        />
                                    </div>
                                    <div className='w-[90%] mx-auto mt-[20px]'>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='w-full h-[100px] flex justify-between items-center px-4'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex gap-2 hidden '>
                            <div className='w-[45px] h-[45px] border border-gray-300 rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={() => sliderRef.current.slickPrev()}>
                                <FaArrowLeft />
                            </div>
                            <div className='w-[45px] h-[45px] border border-gray-300 rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={() => sliderRef.current.slickNext()}>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className='w-full flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end justify-center gap-3 '>
                            <button className='w-[200px] h-[40px] border rounded-[20px] font-semibold bg-[#088269] border-[#088269] text-white'>Сертификаты</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCategories;
