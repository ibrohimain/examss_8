import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { directData } from './direct';
import { MdOutlineChecklist } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Directions = () => {
    const [isSmScreen, setIsSmScreen] = useState(false);
    const [is2xlScreen, setIs2xlScreen] = useState(false);

    const toggleList = () => {
        setIsOpen(prevState => (is2xlScreen ? true : !prevState));
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsSmScreen(width <= 640);
            setIs2xlScreen(width >= 1536);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (is2xlScreen) {
            setIsOpen(true);
        }
    }, [is2xlScreen]);
    const [isOpen, setIsOpen] = useState(false);

    const directions = [
        'Реанимация', 'Хирургия', 'Офтальмология', 'Лабораторная диагностика',
        'Акушерство и Гинекология', 'Гистология', 'Косметология',
        'Оториноларингология', 'Рентгенология и томография', 'Стерилизация'
    ];

    const [selectedDirection, setSelectedDirection] = useState('Реанимация');


    const renderContent = () => {
        switch (selectedDirection) {
            case 'Реанимация':
                return (
                    <>
                        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                            <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]' >
                                <div className='w-[100%] h-[80%]  bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/62b/92bi9l78swt1jaogx5dm801yp1fe9paw.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%] '>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Ветеринарное оборудование</p>
                                </div>
                            </div>
                            <div className='w-[100%] cursor-pointer h-[49%] border  rounded-[10px]' >
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/c34/rn7m1uuewvj9oicmo93vtj73y5ja8pjb.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Анестезиология</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                            <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/880/suvbrzxbysiuude1p334zei7lrlnr0ur.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Физиотерапевтическое оборудование</p>
                                </div>
                            </div>
                            <div className='w-[100%] cursor-pointer h-[49%] rounded-[10px] border '>
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/e61/yzbb9v8otr4mzuu8dded27n3drtn77o5.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Стоматологическое оборудование</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                            <div className='w-[100%] cursor-pointer h-[100%] border rounded-[10px]'>
                                <div className='w-[100%] h-[90%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/4d0/2qk6mmu3tgzz9osb80mmprue9ug630ex.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[10%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Хирургические инструменты</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                            <div className='w-[100%] cursor-pointer h-[100%] border rounded-[10px]'>
                                <div className='w-[100%] h-[90%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/02d/h71d4q26byc3s68ncs4oqnm6enqkj48c.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[10%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Проктологическое оборудование</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                            <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/e23/ewxnnyjgcugwish6hd1txofa7vri22dr.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Оборудование для медицинской </p>
                                </div>
                            </div>
                            <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/eaf/gzpaz5zsp1p9oe1yxshv75n4q1dgmm0q.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Оборудование для радиационной </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                            <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/2b6/n6xsa2qh9jxhjve04xpmqzquyy7q9zni.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Оборудование для мониторинга</p>
                                </div>
                            </div>
                            <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/e14/wokbfqb53lc62yziutew71i58y0ghrn9.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                <div className='w-[100%] h-[20%]'>
                                    <p className='w-[90%] mx-auto mt-[5px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Педиатрическое оборудование</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Хирургия':
                return (
                    <>
                        {directData.map((item, index) => (
                            <div className=''>
                                <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] h-[150px] rounded-[10px] border flex'>
                                    <div className='w-[40%] bg-[white] flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px]'><img src={item.img} alt="" className='w-[80%] h-[50%] rounded-tl-[10px] rounded-bl-[10px]' /></div>
                                    <div className='w-[60%] flex items-center justify-center text-[14px]'><p className='w-[80%] h-[100%] flex items-center mx-auto 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[8px]'>{item.common_name}</p></div>
                                </div>
                            </div>
                        ))}
                    </>
                );
            case 'Офтальмология':
                return (
                    <>
                        {directData.map((item, index) => (
                            <div className='border'>
                                <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] h-[150px] rounded-[10px] border flex'>
                                    <div className='w-[40%] bg-[white] flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px]'><img src={item.img} alt="" className='w-[80%] h-[50%] rounded-tl-[10px] rounded-bl-[10px]' /></div>
                                    <div className='w-[60%] flex items-center justify-center text-[14px]'><p className='w-[80%] h-[100px] flex items-center mx-auto 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[8px]'>{item.common_name}</p></div>
                                </div>
                            </div>
                        ))}
                    </>
                );
            case 'Офтальмология':
                return (
                    <>
                        {directData.map((item, index) => (
                            <div className='border'>
                                <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] h-[150px] rounded-[10px] border flex'>
                                    <div className='w-[40%] bg-[white] flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px]'><img src={item.img} alt="" className='w-[80%] h-[50%] rounded-tl-[10px] rounded-bl-[10px]' /></div>
                                    <div className='w-[60%] flex items-center justify-center text-[14px]'><p className='w-[80%] h-[100px] flex items-center mx-auto 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[8px]'>{item.common_name}</p></div>
                                </div>
                            </div>
                        ))}
                    </>
                );
            case 'Лабораторная диагностика':
                return (
                    <>
                        <Link to='/categorie'>
                            <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                                <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]' >
                                    <div className='w-[100%] h-[80%]  bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/62b/92bi9l78swt1jaogx5dm801yp1fe9paw.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%] '>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Ветеринарное оборудование</p>
                                    </div>
                                </div>
                                <div className='w-[100%] cursor-pointer h-[49%] border  rounded-[10px]' >
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/c34/rn7m1uuewvj9oicmo93vtj73y5ja8pjb.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Анестезиология</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/categorie'>
                            <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                                <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/880/suvbrzxbysiuude1p334zei7lrlnr0ur.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Физиотерапевтическое оборудование</p>
                                    </div>
                                </div>
                                <div className='w-[100%] cursor-pointer h-[49%] rounded-[10px] border '>
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/e61/yzbb9v8otr4mzuu8dded27n3drtn77o5.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Стоматологическое оборудование</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/categorie'>
                            <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                                <div className='w-[100%] cursor-pointer h-[100%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[90%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/4d0/2qk6mmu3tgzz9osb80mmprue9ug630ex.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[10%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Хирургические инструменты</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/categorie'>
                            <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                                <div className='w-[100%] cursor-pointer h-[100%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[90%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/02d/h71d4q26byc3s68ncs4oqnm6enqkj48c.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[10%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Проктологическое оборудование</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/categorie'>
                            <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                                <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/e23/ewxnnyjgcugwish6hd1txofa7vri22dr.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Оборудование для медицинской </p>
                                    </div>
                                </div>
                                <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/eaf/gzpaz5zsp1p9oe1yxshv75n4q1dgmm0q.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Оборудование для радиационной </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/categorie'>
                            <div className='w-[100%] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:h-[450px] lg:h-[640px] 2xl:h-[580px] xl:h-[585px] sm:h-[500px] h-[415px] rounded-[10px] flex flex-col justify-between'>
                                <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/2b6/n6xsa2qh9jxhjve04xpmqzquyy7q9zni.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[95%] mx-auto mt-[5px]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Оборудование для мониторинга</p>
                                    </div>
                                </div>
                                <div className='w-[100%] cursor-pointer h-[49%] border rounded-[10px]'>
                                    <div className='w-[100%] h-[80%] bg-white flex items-center justify-center rounded-[10px]'><img src='https://global-mt.ru/upload/iblock/e14/wokbfqb53lc62yziutew71i58y0ghrn9.jpg' className='w-[100%] h-[100%] rounded-tr-[10px] rounded-tl-[10px]' /> </div>
                                    <div className='w-[100%] h-[20%]'>
                                        <p className='w-[90%] mx-auto mt-[5px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-center'>Педиатрическое оборудование</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                );
            default:
                return <div>Select a direction to see the content.</div>;
        }
    };

    return (
        <div>
            <div className='w-[95%] 2xl:w-[1440px] mb-[80px] mx-auto mt-[40px] '>
                <div className='xl:w-[100%] xl:h-[1200px] lg:w-[100%] md:w-[100%] 2xl:flex xl:flex lg:flex md:flex justify-between mx-auto'>
                    <div className=' 2xl:w-[29%] xl:w-[22%] lg:w-[27%] md:w-[25%] sm:w-[100%] h-auto rounded-[10px] md:order-2 sm:order-1 2xl:order-1 xl:order-1 lg:order-1 2xl:h-[500px] xl:h-auto lg:h-auto md:h-[530px] sm:h-auto sm:mb-[10px] sm:flex sm:items-center 2xl:items-start xl:items-start lg:items-start'>
                        <div className='w-[95%] mx-auto' onClick={toggleList}>
                            <h2 className='text-[20px] mt-[20px] mb-[20px] flex items-center gap-2 cursor-pointer px-4 py-2 border border-gray-300 rounded-[10px] shadow-sm' >
                                <MdOutlineChecklist className='text-[20px] 2xl:hidden xl:hidden lg:hidden' onClick={toggleList} /> Направления
                            </h2>
                            {isOpen && (
                                <ul className='mt-[15px]'>
                                    {directions.map(direction => (
                                        <li
                                            key={direction}
                                            className={`w-[100%] cursor-pointer font-light flex items-center justify-between pt-2 pb-2 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] ${selectedDirection === direction ? 'font-bold' : ''}`}
                                            onClick={() => setSelectedDirection(direction)}
                                        >
                                            <div>{direction}</div>
                                            <FaAngleRight className='text-[14px]' />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className='2xl:w-[69%] xl:w-[75%] lg:w-[71%] md:w-[74%] sm:w-[100%] xl:h-[1300px] md:h-[930px] sm:h-[1030px] h-[1300px] lg:h-[1250px] rounded-[10px] md:order-1  2xl:order-2 xl:order-2 lg:order-2 mt-5 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 '>
                        <div className='w-[100%] grid 2xl:grid-cols-3 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2'>
                            {renderContent()}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Directions;