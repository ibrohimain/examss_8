import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CatalogLink = () => {
    return (
        <>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto h-[30px] mt-[20px] 2xl:block xl:block lg:block md:block sm:block hidden'>
                <ul className='w-[100%] h-[100%] flex items-center gap-2 '>
                    <li className='text-[gray] cursor-pointer'><Link to='/'>Главная</Link></li>
                    <li><MdChevronRight /></li>
                    <li className='text-black cursor-pointer'><Link to='/catalog'>Каталог</Link></li>
                </ul>
            </div>
            <div className='w-[95%] h-[40px] mx-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
                <ul className='flex w-[100%] h-[100%] items-center gap-3' >
                    <li className='cursor-pointer text-[black]'><Link to='/'>Главная</Link></li>
                    <li className='cursor-pointer text-[gray]'><FiChevronLeft /></li>
                </ul>
            </div >
        </>
    )
}

export default CatalogLink
