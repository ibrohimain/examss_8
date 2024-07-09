import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { navostyCompany } from './navostyCompany';

const NavostiyCompany = () => {

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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='w-[95%] 2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] xl:h-[450px] 2xl:h-[600px] lg:h-[450px] md:h-[450px] sm:h-[550px] h-[500px] mx-auto mt-[30px]'>
            <div className='w-[100%] 2xl:w-[1440px] mx-auto h-[100%] 2xl:flex xl:flex lg:flex '>
                <div className='w-[100%] 2xl:w-[25%] xl:w-[20%] lg:w-[20%] md:w-[100%] sm:w-[100%]  md:h-[10%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] p-4'>
                    <h2 className='text-[30px] font-semibold leading-9 mt-[30px] w-[50%]'>Новости компании</h2>
                </div>
                <div className='w-[100%] 2xl:w-[75%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] h-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[90%]'>
                    <Slider ref={sliderRef} {...settings} className='w-full mx-auto mt-[50px]'>
                        {navostyCompany.map((item, index) => (
                            <div key={index} className='px-2 w-[50%]'>
                                <div className="w-[100%] 2xl:h-[400px] xl:h-[370px] lg:h-[350px] md:h-[300px] sm:h-[330px] h-[250px] border rounded-[20px]">
                                    <div className="w-[100%] 2xl:h-[70%] xl:h-[65%] lg:h-[65%] md:h-[60%] sm:h-[60%] h-[65%] bg-[white] flex items-center justify-center relative rounded-[20px]">

                                        <img
                                            src={item.img}
                                            alt={`Complex ${index + 1}`}
                                            className="w-[100%] h-[100%] object-cover rounded-tr-[20px] rounded-tl-[20px]"
                                        />
                                    </div>
                                    <div className='w-[90%] 2xl:h-[30%] xl:h-[35%] lg:h-[35%] md:h-[40%] sm:h-[40%] h-[35%] mx-auto'>
                                        <p className='text-[gray] 2xl:text-[14px] lg:text-[13px] xl:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] w-[95%] mt-[10px]'>{item.year}</p>
                                        <h2 className='2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-semibold w-[95%] mt-[10px]'>{item.name}</h2>
                                        <p className='text-[gray] 2xl:text-[14px] lg:text-[13px] xl:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] w-[100%]'>{item.title_name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default NavostiyCompany;
