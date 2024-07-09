import React from 'react'
import ServicesCart from '../../components/Uslugies/ServicesCart'
import FiguresAndFact from '../ACompany/FiguresAndFact'
import Certificate from '../ACompany/Certificate'
import Map from '../../components/map/Map'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

const Uslugi = () => {
    return (
        <div className='w-[100%] mx-auto '>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[40px] mx-auto 2xl:block xl:block lg:block md:block sm:block hidden'>
                <ul className='w-[100%] h-[100%] flex items-center gap-3'>
                    <li className='text-[gray] cursor-pointer'><Link to='/'>Главная</Link></li>
                    <li className='text-[gray] cursor-pointer'><MdChevronRight /></li>
                    <li className='text-[black] cursor-pointer'>Услуги</li>
                </ul>
            </div>
            <div className='w-[95%] h-[40px] mx-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
                <ul className='flex w-[100%] h-[100%] items-center gap-3' >
                    <li className='cursor-pointer text-[black]'>Главная</li>
                    <li className='cursor-pointer text-[gray]'><FiChevronLeft /></li>
                </ul>
            </div >
            <ServicesCart />
            <FiguresAndFact />
            <Certificate />
            <Map />
        </div>
    )
}

export default Uslugi
