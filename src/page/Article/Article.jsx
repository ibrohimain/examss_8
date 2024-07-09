import React from 'react'
import InformationArticles from '../../components/Articless/InformationArticles'
import CompanyCarousel from '../../components/carusels/CompanyCarousel'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import Map from '../../components/map/Map'
import { MdChevronRight } from 'react-icons/md'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Article = () => {
    return (
        <div className='w-[100%] mx-auto' border border-black>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] h-[40px] mx-auto 2xl:block xl:block lg:block md:block sm:block hidden'>
                <ul className='w-[100%] h-[100%] flex items-center gap-3'>
                    <li className='text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] cursor-pointer text-[gray]'>Главная</li>
                    <li className='text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] cursor-pointer text-[gray]'><Link>Блог</Link></li>
                    <li className='text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] cursor-pointer text-[black]'>Информационная статья</li>
                </ul>
            </div>
            <div className='w-[95%] h-[40px] mx-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
                <ul className='flex w-[100%] h-[100%] items-center gap-3' >
                    <li className='cursor-pointer text-[black]'><Link to='/'>Главная</Link></li>
                    <li className='cursor-pointer text-[gray]'><FiChevronLeft /></li>
                </ul>
            </div >
            <InformationArticles />
            <CatalogCarouselData />
            <CompanyCarousel />
            <BrendCarousel />
            <Map />
        </div>
    )
}

export default Article
