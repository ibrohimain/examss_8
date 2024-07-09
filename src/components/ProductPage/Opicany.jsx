import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { otziv, otzivz } from './Otziv';
import { Rating } from '@mui/material';

const Opicany = ({ otzivs }) => {

    const [expanded, setExpanded] = useState(false);



    const [activeTab, setActiveTab] = useState('Описание оборудования');

    const renderContent = () => {
        switch (activeTab) {
            case 'Описание оборудования':
                return <>
                    <div className='2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto'>
                        <p className='text-[gray] w-[100%] mx-auto pt-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident deserunt dignissimos sit numquam, ratione qui dolore laboriosam voluptate officiis natus inventore ex quo tenetur dolores veritatis ipsa modi aspernatur, quas dolorum illo iste optio perspiciatis? Repellendus earum quos suscipit aliquid ullam, quas nisi corrupti eveniet sequi ipsam animi laudantium nobis minima nihil dicta debitis reprehenderit fugiat quibusdam vero! Quo sapiente neque reiciendis, eaque nesciunt quos dicta nemo, voluptatem repellendus reprehenderit id totam at sequi veritatis aut aspernatur perferendis excepturi molestias unde doloremque officiis hic maxime. Adipisci inventore temporibus possimus ex ullam aliquid natus non numquam molestiae? Quasi, provident dignissimos.</p>
                    </div>
                </>;
            case 'Характеристики и документы':
                return <>
                    <div className='w-[95%] mx-auto hidden 2xl:block xl:block md:block sm:block'>
                        <h2 className='text-[20px] mb-[15px] mt-[10px]'>Content for Описание оборудования</h2>
                        <div className='flex justify-between'>
                            <ul>
                                <li className='text-[gray] font-medium'>Вес оборудования   .  .  .  .  .  .  .  .  .  .  . <span className='text-black'>90 кг</span></li>
                                <li className='text-[gray] font-medium mt-[3px]'>Детектор   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . <span className='text-black'>CsI - на основе аморфного кремния</span></li>
                                <li className='text-[gray] font-medium mt-[3px]'>Время сканирования   .  .  .  .  .  .  .  .  . <span className='text-black'>PAN стандарт - 12 сек</span></li>
                                <li className='text-[gray] font-medium mt-[3px]'>Размер фокусного пятна   .  .  .  .  .  . <span className='text-black'>0.6</span></li>
                                <li className='text-[gray] font-medium mt-[3px]'>Динамический диапазон   .  .  .  .  .  . <span className='text-black'>16 бит (65 536 градации серого)</span></li>
                            </ul>
                            <ul>
                                <li className='text-[gray] font-medium '>Рабочее напряжение   .  .  .  .  .  .  .  .  . <span className='text-black'>90 кг</span></li>
                                <li className='text-[gray] font-medium mt-[3px]'>Максимальный ток  .  .  .  .  .  .  .  .  .  .  . <span className='text-black'>CsI - на основе аморфного кремния</span></li>
                                <li className='text-[gray] font-medium mt-[3px]'>Гарантия   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . <span className='text-black'>PAN стандарт - 12 сек</span></li>
                            </ul>
                        </div>
                    </div>
                </>;
            case 'Услуги и сервис':
                return <>
                    <div className='w-[95%] mx-auto hidden 2xl:block xl:block md:block sm:block'>
                        <h2 className='text-[20px] mb-[15px] mt-[10px]'>Услуги и сервис</h2>
                        <Marquee className=''>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/f83/zg8jojeir85b26b2qfhovzkduhhcsfmz.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/603/4hec1gdh4dx9rhf6lltvkp3tvvs0r0mr.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/1d3/dqnzekqt24dxocgeimau5qh9aas80tyg.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/13d/xhc5dpgzwbl57k40gotk2pja56fc066p.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/a03/6j54l500hczq2bd0446aoulqjrkhqzjl.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/93f/8r7y74y5unocc8pniluuey7ecs4gxoje.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                        </Marquee>
                    </div>
                </>;
            case 'Оптовым покупателям':
                return <div className='hidden 2xl:block xl:block md:block sm:block'>
                    <h2 className='w-[95%] mx-auto text-[30px] pb-[10px] mt-[10px]'>Условия доставки и оплаты</h2>
                    <p className='w-[95%] mx-auto'>Доставка по России осуществляется ведущими транспортными и курьерскими компаниями («Деловые линии», СДЭК, DPD и др.). Организуем доставку медоборудования любой логистической компанией, имеющей филиал в Москве.

                        Работаем с юридическими и физическими лицами, индивидуальными предпринимателями. Безналичная оплата по договору и счету. Применяем кассовый аппарат при оплате товаров физическими лицами через кредитные учреждения.</p>
                    <span className='text-[#088269] w-[95%] mx-auto block mt-[10px]'>Реквизиты для оформеления заказа</span>
                </div>;
            case 'Отзывы 4':
                return <div className='hidden 2xl:block xl:block lg:block md:block sm:block'>
                    <h2></h2>
                    <div className={`w-[95%] mx-auto ${expanded ? 'h-auto' : 'h-[150px]'}`} style={{ overflowY: expanded ? 'auto' : 'hidden', overflowX: 'hidden' }}>
                        <div className={`${expanded ? 'max-h-[none]' : 'max-h-[150px]'}`} style={{ overflowY: expanded ? 'auto' : 'hidden' }}>
                            {otziv.map((item, index) => (
                                <div key={index} className='b w-[95%] h-[150px] mb-[10px] rounded-[10px]'>
                                    <div className='mx-auto mt-[5px] flex items-center gap-2'>
                                        <div className='w-[35px] h-[35px] rounded-[50%] border flex items-center justify-center bg-[rgb(130,107,132,0.3)] text-[gray]'>
                                            {item.userimg}
                                        </div>
                                        <h2 className='text-[20px] font-semibold'>{item.username}</h2>
                                        <Rating name="size-small" defaultValue={2} size="small" sx={{ fontSize: "14px", marginTop: "5px" }} />
                                        <span>{item.number}</span>
                                    </div>
                                    <div className='w-[93%] mx-auto'>
                                        <p className='text-[gray]'>{item.info}</p>
                                        <span>{item.data}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            default:
                return null;
        }
    };

    return (
        <>
            <div className='2xl:w-[1440px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mx-auto'>
                <div className=' w-[100%] 2xl:h-[330px] xl:h-[330px] lg:h-[330px] md:h-[330px] sm:h-[330px] h-[430px] rounded-[10px] mx-auto'>
                    <div className='2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[15%] mx-auto'>
                        <ul className='flex h-full items-center gap-4 '>
                            {['Описание оборудования', 'Характеристики и документы', 'Услуги и сервис', 'Оптовым покупателям', 'Отзывы 4'].map((tab) => (
                                <li
                                    key={tab}
                                    className={`2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[10px] text-[8px] text-center text-[gray] hover:text-black cursor-pointer transition-[0.3s] hover:font-semibold font-semibold border-b-[3px] ${activeTab === tab ? 'border-[green]' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-[100%] h-[70%] bg-white tabbar_cart'>
                        {renderContent()}
                    </div>
                    <div className='w-[100%] h-[15%] border'>
                        <ul className='flex items-center h-[100%] gap-4 w-[95%] mx-auto'>
                            <li className='text-[#088269] font-semibold cursor-pointer'>Новинки</li>
                            <li className='text-[#088269] font-semibold cursor-pointer'>Получить прайс</li>
                            <li className='text-[#088269] font-semibold cursor-pointer'>Условия доставки</li>
                            <li className='text-[#088269] font-semibold cursor-pointer'>Способы оплаты</li>
                        </ul>
                    </div>
                </div>
                <div className=' w-[100%] 2xl:h-[330px] xl:h-[330px] lg:h-[330px] md:h-[330px] sm:h-[330px] h-[600px] rounded-[10px] mx-auto mt-[10px] 2xl:hidden xl:hidden lg:hidden md:hidden '>
                    <div className='w-[95%] mx-auto'>
                        <h2 className='text-[20px] mb-[15px] mt-[10px]'>Content for Описание оборудования</h2>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex justify-between'>
                            <ul>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium'>Вес оборудования <span className='text-black block'>90 кг</span></li>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Детектор <span className='text-black block'>CsI - на основе аморфного кремния</span></li>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Время сканирования <span className='text-black block'>PAN стандарт - 12 сек</span></li>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Размер фокусного пятна <span className='text-black block'>0.6</span></li>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Динамический диапазон <span className='text-black block'>16 бит (65 536 градации серого)</span></li>
                            </ul>
                            <ul>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Рабочее напряжение <span className='text-black block'>90 кг</span></li>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Максимальный ток <span className='text-black block'>CsI - на основе аморфного кремния</span></li>
                                <li className='mt-[10px] text-[gray] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[15px] font-medium '>Гарантия <span className='text-black block'>PAN стандарт - 12 сек</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' w-[100%] 2xl:h-[330px] xl:h-[330px] lg:h-[330px] md:h-[330px] sm:h-[330px] h-[250px] rounded-[10px] mx-auto mt-[10px] 2xl:hidden xl:hidden lg:hidden md:hidden '>
                    <div className='w-[95%] mx-auto'>
                        <h2 className='text-[20px] mb-[15px] mt-[10px]'>Услуги и сервис</h2>
                        <Marquee className=''>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/f83/zg8jojeir85b26b2qfhovzkduhhcsfmz.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/603/4hec1gdh4dx9rhf6lltvkp3tvvs0r0mr.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/1d3/dqnzekqt24dxocgeimau5qh9aas80tyg.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/13d/xhc5dpgzwbl57k40gotk2pja56fc066p.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/a03/6j54l500hczq2bd0446aoulqjrkhqzjl.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                            <div className='w-[250px] ml-[10px] h-[150px] border rounded' >
                                <div className='w-[100%] h-[80%] flex items-center justify-center'>
                                    <img src="https://global-mt.ru/upload/iblock/93f/8r7y74y5unocc8pniluuey7ecs4gxoje.jpg" alt="" className='w-[90%] h-full' />
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center'>Апробация</div>
                            </div>
                        </Marquee>
                    </div>
                </div>
                <div className=' w-[100%] 2xl:h-[330px] xl:h-[330px] lg:h-[330px] md:h-[330px] sm:h-[330px] h-[600px] rounded-[10px] mx-auto mt-[10px] 2xl:hidden xl:hidden lg:hidden md:hidden '>
                    <div>
                        <h2 className='w-[95%] mx-auto text-[30px] pb-[10px] mt-[10px]'>Условия доставки и оплаты</h2>
                        <p className='2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto'>Доставка по России осуществляется ведущими транспортными и курьерскими компаниями («Деловые линии», СДЭК, DPD и др.). Организуем доставку медоборудования любой логистической компанией, имеющей филиал в Москве.

                            Работаем с юридическими и физическими лицами, индивидуальными предпринимателями. Безналичная оплата по договору и счету. Применяем кассовый аппарат при оплате товаров физическими лицами через кредитные учреждения.</p>
                        <span className='text-[#088269] w-[95%] mx-auto block mt-[10px]'>Реквизиты для оформеления заказа</span>
                    </div>;
                </div>
            </div>

        </>
    );
};

export default Opicany;
