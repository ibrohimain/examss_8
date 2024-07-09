import React from 'react'
import MedicalEqiupment from '../../components/BrendPage/MedicalEqiupment'
import Equepment from '../../components/BrendPage/Equepment'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import Map from '../../components/map/Map'
import Infarmation from '../../components/information/Infarmation'
import { MdChevronRight } from 'react-icons/md'
import { FiChevronLeft } from 'react-icons/fi'

const BrendPage = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <div className='w-[95%] h-[40px] mx-auto 2xl:block xl:block lg:block md:block sm:block hidden'>
                <ul className='flex w-[100%] h-[100%] items-center gap-3' >
                    <li className='cursor-pointer text-[gray]'>Главная</li>
                    <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='cursor-pointer text-[gray]'>Каталог</li>
                    <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='cursor-pointer text-[gray]'>Производители</li>
                    <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='cursor-pointer text-[14px] text-[black]'>Медецинское оборудование Draeger</li>
                </ul>
            </div>
            <div className='w-[95%] h-[40px] mx-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
                <ul className='flex w-[100%] h-[100%] items-center gap-3' >
                    <li className='cursor-pointer text-[black]'>Главная</li>
                    <li className='cursor-pointer text-[gray]'><FiChevronLeft /></li>
                </ul>
            </div >
            <MedicalEqiupment />
            <Equepment />
            <BrendCarousel />
            <Infarmation />
            <Map />
        </div >
    )
}

export default BrendPage
