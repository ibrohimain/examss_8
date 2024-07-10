import React from 'react'
import Map from '../../components/map/Map'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <>
            <div className=''>
                <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[40px] mx-auto hidden 2xl:block lg:block xl:block md:block sm:block '>
                    <ul className='w-[100%] h-[100%] flex items-center gap-3'>
                        <li className='text-[gray] cursor-pointer'><Link to='/'>Главная</Link></li>
                        <li className='text-[gray] cursor-pointer'><MdChevronRight /></li>
                        <li className='text-[black] cursor-pointer'>Оплата</li>
                    </ul>
                </div>
                <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-auto mx-auto mt-[40px] mb-[100px]'>
                    <h2 className='2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-[28px] font-semibold'>Оплата</h2>
                    <p className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] mt-[30px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. </p>
                    <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[300px] xl:h-[300px] lg:h-[300px]  md:h-[520px] sm:h-[520px] grid 2xl:grid-cols-3 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap xl:grid-cols-3 lg:grid-cols-3 md:flex md:flex-wrap sm:flex sm:flex-wrap   gap-2 mt-[50px] mb-[20px]'>
                        <div className='2xl:w-[99%] xl:w-[99%] lg:w-[99%] md:w-[49%] sm:w-[49%] w-[100%] 2xl:h-[260px] xl:h-[260px] lg:h-[280px] md:h-[250px] sm:h-[250px] h-[250px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='text-[20px] font-semibold'>Оплата наличными</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Также как постоянное обеспечение нашей деятельности требует определения </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное обеспечение нашей </li>
                                </ul>
                            </div>
                        </div>
                        <div className='2xl:w-[99%] xl:w-[99%] lg:w-[99%] md:w-[49%] sm:w-[49%] w-[100%] 2xl:h-[260px] xl:h-[260px] lg:h-[280px] md:h-[250px] sm:h-[250px] h-[250px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='font-semibold text-[20px]'>Безналичный расчет</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Также как постоянное обеспечение нашей деятельности требует определения </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Также как постоянное обеспечение нашей </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное</li>
                                </ul>
                            </div>
                        </div>
                        <div className='2xl:w-[99%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[260px] xl:h-[260px] lg:h-[280px] md:h-[250px] sm:h-[250px] h-[250px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='font-semibold text-[20px]'>Оплата банковской картой</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Также как постоянное обеспечение нашей </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное</li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>4. Также как постоянное обеспечение </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className='2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-[28px] font-medium'>Порядок возврата денежных средств</h2>
                    <p className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] mt-[30px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. </p>
                    <div className='w-[100%] 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[300px] sm:h-[300px] h-[560px] grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 mt-[50px] mb-[20px]'>
                        <div className='2xl:w-[99%] xl:w-[99%] lg:w-[99%] md:w-[99%] sm:w-[99%] w-[99%] h-[270px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='font-semibold text-[20px] w-[100%]'>Оплата банковской картой</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Также как постоянное обеспечение нашей </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное</li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>4. Также как постоянное обеспечение </li>
                                </ul>
                            </div>
                        </div>
                        <div className='2xl:w-[99%] xl:w-[99%] lg:w-[99%] md:w-[99%] sm:w-[99%] w-[99%] h-[270px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='font-semibold text-[20px]'>Оплата банковской картой</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Также как постоянное обеспечение нашей </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное</li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>4. Также как постоянное обеспечение </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className='2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-[28px] font-medium'>Условия поставок</h2>
                    <p className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] mt-[30px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. </p>
                    <div className='w-[100%] 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[300px] sm:h-[300px] h-[560px] grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 mt-[50px] mb-[20px]'>
                        <div className='2xl:w-[99%] xl:w-[99%] lg:w-[99%] md:w-[99%] sm:w-[99%] w-[99%] h-[270px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='font-semibold text-[20px] w-[100%]'>Оплата банковской картой</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Также как постоянное обеспечение нашей </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное</li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>4. Также как постоянное обеспечение </li>
                                </ul>
                            </div>
                        </div>
                        <div className='2xl:w-[99%] xl:w-[99%] lg:w-[99%] md:w-[99%] sm:w-[99%] w-[99%] h-[270px] bg-white rounded-[10px] flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <h2 className='font-semibold text-[20px]'>Оплата банковской картой</h2>
                                <ul>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>2. Также как постоянное обеспечение нашей </li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>3. Также как постоянное</li>
                                    <li className='text-[gray] w-[100%] mt-[10px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'>4. Также как постоянное обеспечение </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Map />
            </div>
        </>
    )
}

export default Payment
