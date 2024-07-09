import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

const Vakansies = () => {
    const [isOpen, setIsOpen] = useState(false); // Elementni ochish/yopish uchun holat

    const toggleDetails = () => {
        setIsOpen(!isOpen); // Holatni almashtirish
    };

    return (
        <div className='w-[1440px] mx-auto pb-20 mt-8 flex'>
            <div className='w-1/2 pr-8'>
                <h2 className='text-3xl font-medium mb-3'>Вакансии</h2>
                <p className='w-4/5 text-gray-700 leading-relaxed'>
                    В «Глобал Медикал Трейд» всегда есть место как для новичков, так и для
                    состоявшихся экспертов. Тем, кто только начинает строить карьеру, мы
                    предлагаем возможность получить ценные знания, а опытным специалистам —
                    расширить компетенции.
                </p>
            </div>
            <div className='w-1/2'>
                <h2 className='text-xl font-medium mb-4'>Актуальные вакансии</h2>
                <div className='max-w-full mx-auto overflow-hidden mb-4'>
                    <div className='px-6 py-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg text-gray-800'>Менеджер по продажам</h2>
                            <div
                                className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'
                                onClick={toggleDetails}
                            >
                                {isOpen ? '-' : '+'}
                            </div>
                        </div>
                        {isOpen && (
                            <div className='mt-4'>
                                <p className='text-gray-600 text-sm'>Обязанности:</p>
                                <ul className='mt-1 pl-4'>
                                    <li>• Работа с входящими/исходящими звонками</li>
                                    <li>• Работа с договорами составление/заключение</li>
                                    <li>• Ведение деловой переписки (эл. почта, переписка в мессенджерах)</li>
                                    <li>• Выполнение плановых показателей</li>
                                </ul>
                                <p className='text-gray-600 text-sm mt-2'>Требования:</p>
                                <ul className='mt-1 pl-4'>
                                    <li>• Опыт работы телефонных продаж</li>
                                    <li>• Опыт работы в CRM</li>
                                    <li>• Способность восприятия большого объема информации</li>
                                </ul>
                                <p className='text-gray-600 text-sm mt-2'>График работы:</p>
                                <ul className='mt-1 pl-4'>
                                    <li>• Оформление с первого рабочего дня</li>
                                    <li>• 00:00 - 23:59</li>
                                </ul>
                                <button className='w-[200px] mt-4 bg-[#088269] text-white py-2 px-4 rounded-[30px] hover:bg-green-700'>
                                    Отправить резюме
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <hr className='w-full' />
                <div>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <h2>Специалист по медицинскому оборудованию</h2>
                        <div className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <h2>Офис менеджер</h2>
                        <div className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <h2>HR–менеджер</h2>
                        <div className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
                <h2 className='mt-4'>Архив вакансий</h2>
                <hr className='w-full' />
                <div>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <h2>Специалист по медицинскому оборудованию</h2>
                        <div className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <h2>Офис менеджер</h2>
                        <div className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <h2>HR–менеджер</h2>
                        <div className='cursor-pointer bg-[#088269] rounded-full w-10 h-10 flex items-center justify-center text-white'>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vakansies;
