import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx';
import Map from '../../components/map/Map';

const Certificat = () => {
    const [isOpen, setIsOpen] = useState(false); // Elementni ochish/yopish uchun holat

    const toggleDetails = () => {
        setIsOpen(!isOpen); // Holatni almashtirish
    };

    return (
        <>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto pb-20 mt-8 2xl:flex xl:flex lg:flex mb-[50px]'>
                <div className='2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%] pr-8'>
                    <h2 className='text-3xl font-medium mb-3'>Сертификаты</h2>
                </div>
                <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%]'>
                    <h2 className='text-xl font-medium mb-4'>Актуальные вакансии</h2>
                    <div className='max-w-full mx-auto overflow-hidden mb-4'>
                        <div className='px-6 py-4'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-lg text-gray-800'>Менеджер по продажам</h2>
                                <div
                                    className='cursor-pointer border text-[18px] border-[gray]  text-[gray] rounded-full w-10 h-10 flex items-center justify-center'
                                    onClick={toggleDetails}
                                >
                                    {isOpen ? '-' : '+'}
                                </div>
                            </div>
                            {isOpen && (
                                <ul className='mt-[20px]'>
                                    <li className='text-[15px] text-[#07745E]'>Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г</li>
                                    <li className='text-[15px] text-[#07745E]'>Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года</li>
                                    <li className='text-[15px] text-[#07745E]'>Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Гигрометры ВИТ Свидетельство об утверждении</li>
                                    <li className='text-[15px] text-[#07745E]'>Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.</li>
                                    <li className='text-[15px] text-[#07745E]'> Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020 г.</li>
                                    <li className='text-[15px] text-[#07745E]'>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</li>
                                    <li className='text-[15px] text-[#07745E]'>Электроды медицинские РУ № ФСЗ 2012/12612</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <hr className='w-full' />
                    <div>
                        <div className='flex justify-between items-center pt-4 pb-4'>
                            <h2>Материалы для гинекологии и урологии</h2>
                            <div className='cursor-pointer border border-[gray]  rounded-full w-10 h-10 flex items-center justify-center text-white'>
                                <BsPlusLg className='text-[gray]' />
                            </div>
                        </div>
                    </div>
                    <hr className='w-full' />
                    <div>
                        <div className='flex justify-between items-center pt-4 pb-4'>
                            <h2>Материалы для инъекционных процедур</h2>
                            <div className='cursor-pointer border border-[gray]  rounded-full w-10 h-10 flex items-center justify-center text-white'>
                                <BsPlusLg className='text-[gray]' />
                            </div>
                        </div>
                    </div>
                    <hr className='w-full' />
                    <div>
                        <div className='flex justify-between items-center pt-4 pb-4'>
                            <h2>Перевязочные материалы</h2>
                            <div className='cursor-pointer border border-[gray] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                                <BsPlusLg className='text-[gray]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <CatalogCarouselData />
            <Map />
        </>
    );
};

export default Certificat;
