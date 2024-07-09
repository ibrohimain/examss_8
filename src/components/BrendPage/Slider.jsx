import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='w-full mt-4'>
            <Slider {...settings} className=''>
                <div className='px-2'>
                    <div className='w-auto h-[40px] flex items-center justify-center rounded-[20px] border bg-white'>
                        <p className='p-3 text-sm'>Дерматологическое оборудование</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='w-auto h-[40px] flex items-center justify-center rounded-[20px] border bg-white'>
                        <p className='p-3 text-sm'>Ветеринарное оборудование</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='w-auto h-[40px] flex items-center justify-center rounded-[20px] border bg-white'>
                        <p className='p-3 text-sm'>Мебель медицинская</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='w-auto h-[40px] flex items-center justify-center rounded-[20px] border bg-white'>
                        <p className='p-3 text-sm'>Анестезиология</p>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='w-auto h-[40px] flex items-center justify-center rounded-[20px] border bg-white'>
                        <p className='p-3 text-sm'>Показать все</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Sliders;
