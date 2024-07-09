import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Doctors = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

    const images = [
        {
            id: 1,
            large: 'https://global-mt.ru/upload/about/stuff/6.jpg',
            small: 'https://global-mt.ru/upload/about/stuff/6.jpg',
            name: 'Мария',
            surname: 'Мариевна',
            title: 'Основатель компании',
        },
        {
            id: 2,
            large: 'https://global-mt.ru/upload/about/stuff/5.jpg',
            small: 'https://global-mt.ru/upload/about/stuff/5.jpg',
            name: 'Константин',
            surname: 'Константинопольский',
            title: 'Константинопольский',
        },
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setActiveIndex(next),
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 450);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[900px] mx-auto mt-[20px]'>
            <div className='w-[100%] h-[100%] 2xl:flex xl:flex lg:flex '>
                <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[95%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[20%] sm:h-[20%] h-[20%] mx-auto'>
                    <h2 className='2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[20px] text-[20px] w-[80%]'>
                        Опытные сотрудники из производственных компаний
                    </h2>
                    <p className='mt-[10px] w-[80%] text-[12px]'>
                        Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны.
                    </p>
                </div>
                <div className='mt-[20px] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[80%] sm:h-[80%] h-[100%]'>
                    <div className='w-[100%] h-[100%]'>
                        {isMobile ? (
                            <Slider {...settings} className='w-[100%] h-[90%]'>
                                {/* <div className='w-[100%] h-[90%]'> */}
                                {images.map((item) => (
                                    <div key={item.id} className='flex justify-center'>
                                        <div className='w-[100%] h-[100%] border rounded-[10px]'>
                                            <div className='w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[400px] mx-auto  rounded-[10px]'>
                                                <img src={item.large} alt="" className='w-[100%] h-[100%] rounded-[10px]' />
                                            </div>
                                            <div className='w-[95%] mx-auto h-[15%]'>
                                                <h2 className='w-[50%]'>{item.name}</h2>
                                                <p className='text-[gray]'>{item.surname}</p>
                                                <p className='text-[gray]'>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <div className='w-[100%] h-[100%] flex'>
                                <div className='flex w-[100%] h-[100%]'>
                                    <div className='w-[60%] h-[80%]  rounded-[10px]'>
                                        <div className='w-[95%] mx-auto 2xl:h-[85%] xl:h-[85%] lg:h-[85%] md:h-[85%] sm:h-[85%] h-[100%] rounded-[10px]'>
                                            <img src={images[activeIndex].large} alt="" className='w-[100%] 2xlh-[600px] xl:h-[300px] lg:h-[300px] md:h-[450px] sm:h-[500px] rounded-[10px] h-[350px]' />
                                        </div>
                                        <div className='w-[95%] mx-auto h-[15%]'>
                                            <h2 className='w-[50%]'>{images[activeIndex].name}</h2>
                                            <p className='text-[gray]'>{images[activeIndex].surname}</p>
                                            <p className='text-[gray]'>{images[activeIndex].title}</p>
                                            <div className='w-[30%] flex justify-start gap-2 mt-[10px]'>
                                                <div className='w-[50px] h-[50px] border border-[gray] rounded-[50%] flex items-center justify-center cursor-pointer' onClick={handlePrev}>
                                                    <BiLeftArrow />
                                                </div>
                                                <div className='w-[50px]  h-[50px] border border-[gray] rounded-[50%] flex items-center justify-center cursor-pointer' onClick={handleNext}>
                                                    <BiRightArrow />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[38%] h-[96%] flex flex-col gap-3'>
                                        {images.map((item, index) => (
                                            <div key={item.id} className='w-[100%] h-[49%]'>
                                                <div className={`w-[100%] h-[100%] ${index === activeIndex ? '' : ''}`}>
                                                    <img
                                                        src={item.small}
                                                        alt="img"
                                                        className='w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[100%] rounded-[10px] cursor-pointer'
                                                        onClick={() => setActiveIndex(index)} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Doctors;
