import React from 'react'
import Equepment from '../../components/BrendPage/Equepment'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CompanyCarousel from '../../components/carusels/CompanyCarousel'
import IconsBar from '../../components/deliverys/IconsBar'
import CatalogCarouselData from '../../components/carusels/CatalogCarouselData.jsx'
import BrendCarousel from '../../components/carusels/BrendCarousel'
import NavostiyCompany from '../../components/carusels/NavostiyCompany'
import Map from '../../components/map/Map'

const Categorie = () => {
    return (
        <div>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mt-4 h-[40px]'>
                <ul className='h-[100%] flex items-center gap-3'>
                    <li className='cursor-pointer text-[gray]'>Главная</li>
                    <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='cursor-pointer text-[gray]'><Link to='/catalog'>Каталог</Link></li>
                    <li className='cursor-pointer text-[gray]'><MdChevronRight /></li>
                    <li className='cursor-pointer font-medium'>Лабораторное оборудование</li>
                </ul>
            </div>
            <Equepment />
            <CompanyCarousel />
            <IconsBar />
            <CatalogCarouselData />
            <BrendCarousel />
            <NavostiyCompany />
            <Map />
        </div>
    )
}

export default Categorie
